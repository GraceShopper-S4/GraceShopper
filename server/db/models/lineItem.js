const Sequelize = require('sequelize');
const db = require('../db');

// this is once the order is placed.

const lineItem = db.define('lineItem', {
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    currentProductId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// should we have a getter of a total price = quantity* pricePerItem
module.exports = lineItem;