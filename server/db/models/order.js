const Sequelize = require('sequelize')
const db = require('../db')

const order = db.define('order', {
    prices: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false
    },
    quantities: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false
    },
    currentProductIds: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false
    }
})

module.exports = order;