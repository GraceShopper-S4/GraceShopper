const {Review, Product} = require('../db/models');
const app = require('express').Router();


// Post a new review
app.post('/', (req, res, next) => {
    Review.create(req.body)
    .then(review => res.json(review))
    .catch(next);
});


module.exports = app;
