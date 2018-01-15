const Sequelize = require('sequelize')
const db = require('../db')


const Address = db.define('address', {
    shippingCity: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      shippingState: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [2],
          notEmpty: true
        }
      },
      shippingZipCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: [5],
          notEmpty: true
        }
      },
      billingCity: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      billingState: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [2],
          notEmpty: true
        }
      },
      billingZipCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: [5],
          notEmpty: true
        }
      }
},
    {})

module.exports = Address;
