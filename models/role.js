
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('sys_role', {
    roleId: {
      type:DataTypes.STRING,
      primaryKey:true,
      comment: '角色id'
    },
    roleName: {
      type:DataTypes.STRING(64),
      comment: '角色名'
    },
    roleCode: {
      type:DataTypes.STRING(64),
      comment: '角色描述'
    },
    creator: {
      type:DataTypes.STRING,
      comment: '创建人'
    },
    changer: {
      type:DataTypes.STRING,
      comment: '修改人'
    }
  },{
    freezeTableName: true,
    underscored:true,
    timestamps: true
  })
}
