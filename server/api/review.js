const {Review,Product} = require('../db/models');
const app = require('express').Router();

// Post a new review
app.post('/add', (req,res,next) => {
    Review.create(req.body)
    .then(review => res.json(review))
    .catch(next);
});

// Get all reviews made on a single product
app.get('/:id', (req,res,next) => {
    Review.findAll({where: {productId: req.params.id}})
    .then(reviews => res.json(reviews))
    .catch(next);
})

module.exports = app;