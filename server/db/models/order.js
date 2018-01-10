const Sequelize = require('sequelize')
const db = require('../db')

// this is the current cart before checkout

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