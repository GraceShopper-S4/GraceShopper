const Sequelize = require("sequelize");
const db = require("../db");

const review = db.define(
  "review",
  {
    // JM - try not to have the same named table and field. Else we might end up 
    // writing review.review. Maybe body? 
    review: {
      type: Sequelize.TEXT,
      validate: {
        len: [5, 360],
        notEmpty: true,
        notNull: true
      }
    },
    // JM should probably have a min and max
    // how about an enum [1,2,3,4,5]
    // what about not null?
    rating: {
      type: Sequelize.ENUM('1','2','3','4','5'),
      validate: {
        notEmpty: true,
        notNull: true
      }
    }
  },
  {}
);

module.exports = review
