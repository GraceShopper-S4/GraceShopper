const Sequelize = require('sequelize')
const db = require('../db')

const OrderKey = db.define('OrderKey', {
    orderHash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});


module.exports = OrderKey