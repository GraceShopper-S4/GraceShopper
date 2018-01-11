const { Product, Review} = require("../db/models");
const app = require("express").Router();
module.exports = app;

app.get("/", (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
});

app.get("/:id", (req, res, next) => {
  Product.findById(req.params.id, {
    include: [
      {
        model: Review,
        where: {
          productId: req.params.id
        }
      }
    ]
  })
    .then(product => res.send(product))
    .catch(next);
});
