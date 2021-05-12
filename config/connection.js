const Sequelize = require('sequelize');
module.exports = new Sequelize('trails_db', 'root', 'G28H6Bxp?', {
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