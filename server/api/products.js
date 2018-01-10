const {Product} = require('../db/models');
const app = require('express').Router();
module.exports = app;

app.get('/products', (req, res, next) => {
    Product.findAll({})
    .then(products => res.send(products))
    .catch(next)
})

app.get('/products/:id', (req, res, next) => {
    Product.findById(req.params.id)
    .then(product => res.send(product))
    // JM - do you also want to send back all reviews for this product?
    //  include: [Review]
    .catch(next)
})

