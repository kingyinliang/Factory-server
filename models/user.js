
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('sys_user', {
    userId: {
      type:DataTypes.STRING,
      primaryKey:true,
      comment: '用户id'
    },
    username: {
      type:DataTypes.STRING(64),
      comment: '用户名'
    },
    password: {
      type:DataTypes.STRING(64),
      comment: '密码'
    },
    creator: {
      type:DataTypes.STRING,
      comment: '创建人'
    },
    deptId: {
      type:DataTypes.STRING,
      comment: '部门id'
    }
  },{
    freezeTableName: true,
    underscored:true,
    timestamps: true
  })
}
