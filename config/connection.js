const Sequelize = require('sequelize');
require('dotenv').config()


module.exports = process.env.JAWSDB_URL 
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize('trails_db', 'root', 'G28H6Bxp?', {
  
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
