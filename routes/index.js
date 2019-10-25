const router = require('koa-router')()
const login = require('../controllers/login')
const nav = require('../controllers/nav')
const sys = require('./sys')

router.post('/login', login)
router.post('/nav', nav)
router.use('/sys', sys)

module.exports = router.routes()
