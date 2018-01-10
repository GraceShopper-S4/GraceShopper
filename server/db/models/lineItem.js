const Sequelize = require('sequelize');
const db = require('../db');

const lineItem = db.define('lineItem', {
    // JM - integer better
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    // JM - validations here? cannot be negative?
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // JM - *consider* explicitly linking the tables with an association
    currentProductId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
module.exports = lineItem;