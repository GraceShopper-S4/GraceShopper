const Sequelize = require('sequelize')
const db = require('../db')

const order = db.define('order', {
    totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = order;