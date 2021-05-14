const Sequelize = require('sequelize');
require('dotenv').config()


module.exports = process.env.JAWSDB_URL
? new Sequelize(process.envv.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {

    host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
},
});













// module.exports = new Sequelize('trails_db', 'root', 'G28H6Bxp?', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });