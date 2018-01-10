const Sequelize = require('sequelize');
const db = require('../db');

const lineItem = db.define('lineItem', {
    // JM - integer better
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            isEmpty: false,
            notNull: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isEmpty: false,
            notNull: true,
            min: 0
        }
    }
});
module.exports = lineItem;