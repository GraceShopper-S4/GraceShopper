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
    },
    orderKeyHash: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// should we have a getter of a total price = quantity* pricePerItem
module.exports = lineItem;



/*

1. LineItems
Current Cart of all users will be here 

2.Order
The ordered products with the userId, orderId, ProductId 
// need common key to differentitate orders of the same user

3.Previous Order 
    Once the user places an order, the products of that user in the lineItem table are copied here with a specific orderId 
    and all the products which belong to the same user are deleted from the LineItems Table.
    
*/
