const { Product, Review, Genre} = require("../db/models");
const app = require("express").Router();
module.exports = app;

app.get('/', (req, res, next) => {
  Product.findAll({include: [Genre]})
    .then(products => res.json(products))
    .catch(next)
})

app.get("/:id", (req, res, next) => {
  Product.findById(req.params.id, {

    include: [
      {
        model: Review
      }
    ]
  })
    .then(product => res.send(product))
    .catch(next);
});
