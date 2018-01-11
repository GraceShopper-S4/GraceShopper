const Sequelize = require('sequelize');
const db = require('../db');

const review = db.define(
  "review",
  {
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [5, 360],
        notEmpty: true
      }
    },
    rating: {
      type: Sequelize.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {}
);

module.exports = review
