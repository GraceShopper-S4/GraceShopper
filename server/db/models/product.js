const Sequelize = require('sequelize');
const db = require('../db');

const product = db.define(
  'product',
  {
    title: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    description: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    price: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true,
        min: 0
      }
    },
    inventory: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true,
        min: 0
      }
    },
    photo: {
      type: Sequelize.STRING,
      defaultValue:
        'http://www.vector-eps.com/wp-content/gallery/colored-books-design-vectors/colored-book-design-vector6.jpg'
    }
  },
  {}
);
module.exports = product;
