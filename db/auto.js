var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('mds', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    directory: '../models',
    port: '3306',
    additional: {
      timestamps: false,
      underscored:true,
    }
  }
)
auto.run(function (err) {
  if (err) throw err;
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
})
