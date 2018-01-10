const Sequelize = require("sequelize");
const db = require("../db");

const product = db.define(
  // JM - remember notEmpty and notNull are not the same
  "product",
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
    // JM - prefer integer here due to numbers being stored in binary
    price: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true,
        min: 0
      }
    },
    // JM - validate so cannot be negative
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
        "http://www.vector-eps.com/wp-content/gallery/colored-books-design-vectors/colored-book-design-vector6.jpg"
    },
    // JM - Could this be a separate table? many-to-many?
    // hook toLowerCase()
    // maybe use enum?
    // 
    genre: {
      type: Sequelize.STRING,
      validation: {
        notEmpty: true,
        notNull: true
      }
    }
  },
  {}
);
module.exports = product