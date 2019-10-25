
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('sys_role_user', {
    id: {
      type:DataTypes.STRING,
      primaryKey:true,
      comment: '关联表id'
    },
    roleId: {
      type:DataTypes.STRING,
      comment: '角色id'
    },
    userId: {
      type:DataTypes.STRING,
      comment: '用户id'
    },
    creator: {
      type:DataTypes.STRING,
      comment: '创建人'
    },
    changer: {
      type:DataTypes.STRING,
      comment: '修改人'
    }
  }, {
    freezeTableName: true,
    underscored:true,
    timestamps: true,
    paranoid: true
  })
}
