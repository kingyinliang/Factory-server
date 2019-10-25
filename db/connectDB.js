const Sequelize = require('sequelize');

const sequelize = new Sequelize('mds_node','root','root',{
  host:'localhost',
  port: 3306,
  dialect:'mysql',
  define: {
    timestamps: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = sequelize;
