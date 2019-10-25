const sequelize = require('../db/connectDB')
const User = sequelize.import('./user')
const Role = sequelize.import('./role')

// 模型之间的关系
User.belongsToMany(Role, {through: 'sys_user_roles', as:'UserRoles'});
Role.belongsToMany(User, {through: 'sys_user_roles', as:'UserRoles'});

// 同步模型到数据库
sequelize.sync()


exports.User = User
exports.Role = Role
