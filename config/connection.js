const Sequelize = require('sequelize');
require('dotenv').config()


module.exports = process.env.JAWSDB_URL 
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize('hike_db', 'root', 'password', {
  
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
