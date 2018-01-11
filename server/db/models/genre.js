const Sequelize = require('sequelize');
const db = require('../db');


const genre = db.define('genre', {
    body: {
        type: Sequelize.ENUM('Fantasy', 'Horror', 'Fiction', 'Non-Fiction', 'Children'),
        validate: {
            notEmpty: true,
            notNull: true
        }
    }
});


module.exports = genre;