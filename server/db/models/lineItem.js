const Sequelize = require('sequelize');
const db = require('../db');

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
module.exports = lineItem;