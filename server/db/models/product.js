const Sequelize = require("sequelize");
const db = require("../db");

const product = db.define(
  "product",
  {
    title: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: Sequelize.FLOAT,
      validate: {
        notEmpty: true
      }
    },
    inventory: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    photo: {
      type: Sequelize.STRING,
      defaultValue:
        "http://www.vector-eps.com/wp-content/gallery/colored-books-design-vectors/colored-book-design-vector6.jpg",
      validate: {
        notEmpty: true
      }
    },
    genre: {
      type: Sequelize.STRING,
      validation: {
        notEmpty: true
      }
    }
  },
  {}
);

module.exports = product