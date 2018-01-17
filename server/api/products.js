const { Product, Review, Genre} = require("../db/models");
const app = require("express").Router();
module.exports = app;

app.get('/', (req, res, next) => {
  req.session.cart = []
  console.log(req.session)
  Product.findAll({include: [Genre]})
    .then(products => res.json(products))
    .catch(next)
})

app.get("/:id", (req, res, next) => {
  Product.findById(req.params.id, {

    include: [
      {
        model: Review
        // where: {
        //   productId: req.params.id 
        // }
      }
    ]
  })
    .then(product => res.send(product))
    .catch(next);
});
