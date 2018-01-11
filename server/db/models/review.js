const Sequelize = require('sequelize');
const db = require('../db');

const review = db.define(
  'review',
  {
    body: {
      type: Sequelize.TEXT,
      validate: {
        len: [5, 360],
        notEmpty: true,
        notNull: true
      }
    },
    rating: {
      type: Sequelize.ENUM('1', '2', '3', '4', '5'),
      validate: {
        notEmpty: true,
        notNull: true
      }
    }
  },
  {}
);

module.exports = review
