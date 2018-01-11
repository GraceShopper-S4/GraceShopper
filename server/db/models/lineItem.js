const Sequelize = require('sequelize');
const db = require('../db');

// this is once the order is placed.

const lineItem = db.define('lineItem', {
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            notEmpty: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0
        }
    }
});

// should we have a getter of a total price = quantity* pricePerItem
module.exports = lineItem;