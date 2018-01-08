const Sequelize = require("sequelize");
const db = require("../db");

const review = db.define(
  "review",
  {
    review: {
      type: Sequelize.TEXT,
      validate: {
        len: [5, 360],
        notEmpty: true
      }
    },
    rating: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  },
  {}
);

module.exports = review
