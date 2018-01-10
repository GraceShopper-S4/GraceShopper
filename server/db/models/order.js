const Sequelize = require('sequelize')
const db = require('../db')

const order = db.define('order', {
	// JM - prefer integer
    totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    // JM - how about an ENUM here?
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = order;