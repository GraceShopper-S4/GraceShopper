const Sequelize = require('sequelize');
const db = require('../db');


const genre = db.define('genre', {
    body: {
        type: Sequelize.ENUM('Fantasy', 'Horror', 'Fiction', 'Non-Fiction', 'Children'),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});


module.exports = genre;