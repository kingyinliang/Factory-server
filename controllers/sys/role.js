const RoleModel = require('../../models').Role
const uuid = require('uuid/v1')

module.exports = class role {
  static roleList () {
    return async (ctx) => {
      const roleL = await RoleModel.findAll({})
      ctx.body = {
        data: roleL
      }
    }
  }
  static roleAdd () {
    return async (ctx) => {
      const postDate = ctx.request.body
      const role = {
        roleId: uuid(),
        roleName: postDate.roleName,
        roleCode: postDate.roleCode,
        creator: ctx.user.username
      }
      await RoleModel.create(role).then(ok =>  ctx.body = {
        code: 200,
        msg: 'success'
      }).catch(e => ctx.body = {
        code: 500,
        msg: '系统异常'
      })
    }
  }
  static roleDel () {
    return async (ctx) => {}
  }
  static roleUserAdd () {
    return async (ctx) => {}
  }
}
