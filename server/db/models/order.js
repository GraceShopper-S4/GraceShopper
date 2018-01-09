const Sequelize = require('sequelize')
const db = require('../db')

const order = db.define('order', {
    totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = order;