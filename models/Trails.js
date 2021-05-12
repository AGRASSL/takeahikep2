const Sequelize = require('sequelize');
const db = require('../config/connection');

const Trails = db.define('trails', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nayme: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    },
    length: {
        type: Sequelize.INTEGER
    }
})

module.exports = Trails;