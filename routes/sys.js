const router = require('koa-router')()
const role = require('../controllers/sys/role')
// import { role } from '../controllers/sys/role'

router.post('/role/list', role.roleList())
router.post('/role/add', role.roleAdd())
router.post('/role/del', role.roleDel())
router.post('/role/roleUser', role.roleUserAdd())

module.exports = router.routes()
