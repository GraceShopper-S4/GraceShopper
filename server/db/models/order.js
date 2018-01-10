const Sequelize = require('sequelize')
const db = require('../db')

const order = db.define('order', {
	// JM - prefer integer
    totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isEmpty: false,
            notNull: true,
            min: 0
        }
    },
    // JM - how about an ENUM here?
    status: {
        type: Sequelize.ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'),
        defaultValue: 'Pending',
        allowNull: false,
        validate: {
            isEmpty: false,
            notNull: true
        }
    }
});

module.exports = order;