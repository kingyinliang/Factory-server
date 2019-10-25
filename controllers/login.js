const UserModel = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10);

module.exports = login = async (ctx)=>{
  const user = ctx.request.body
  const userSigned = await UserModel.findOne({
    where: {
      username: user.username
    }
  })
  if (!userSigned) {
    ctx.body = {
      code:500,
      msg:'用户不存在'
    }
    return
  } else {
    const hashPwd = bcrypt.hashSync(user.password, salt);
    console.log(hashPwd) // 加密密码
    if (!bcrypt.compareSync(user.password, userSigned.password)) {
      ctx.body = {
        code: 1000,
        msg: '密码不正确'
      }
      return
    } else {
      ctx.user = {
        userId: userSigned.userId,
        username: userSigned.username
      }
      const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 30,
        userId: userSigned.userId,
        username: userSigned.username
      },'chambers')
      ctx.body = {
        code: 0,
        msg: 'success',
        list: [userSigned],
        Authorization: token
      }
    }
  }
}
