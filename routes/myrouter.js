const router = require('koa-router')()

router.get('/my', async (ctx) => {
  ctx.body = {
    code: 200
  }
})

module.exports = router.routes()
