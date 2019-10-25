const jwt = require('jsonwebtoken')
const verify = require('util').promisify(jwt.verify)

const errorHandle = function () {
  return async (ctx, next) => {
    try {
      const token = ctx.header.authorization
      if (token) {
        let payload
        try {
          payload = await verify(token.split(' ')[1], 'chambers')
          ctx.user = payload
        } catch (err) {
          console.log('token verify fail:', err)
        }
      }
      await next()
    } catch (err) {
      if (err.status === 401) {
        ctx.status = 401
        ctx.sendError('401', '页面登录已失效，请重新登录')
      } else {
        ctx.status = 404
        ctx.body = {
          code: 404,
          msg: '404'
        }
      }
    }
  }
}

module.exports = errorHandle
