const Sequelize = require('sequelize')
const db = require('../db')

// this is the current cart before checkout
// Double not null. Worth DRYing up?

const order = db.define('order', {
    totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0
        }
    },
    status: {
        type: Sequelize.ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'),
        defaultValue: 'Pending',
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = order;