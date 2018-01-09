const { review } = require('../db')
const app = require('express').Router()
module.exports = app

// To get product reviews for a single product by id
app.get('/:id', (req, res, next) => {
    review.findById(req.params.id)
    .then(reviews => res.json(reviews))
    .catch(next)
})

//To post a new review for a product

app.post('/', (req, res, next) => {
    review.create(req.body)
    .then(reviews => res.json(reviews))
    .catch(next)
})
