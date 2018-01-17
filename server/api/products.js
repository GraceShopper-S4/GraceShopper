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
 
// Delete a product

app.delete('/:id', (req, res, next) => {
  Product.destroy({where: {id: req.params.id}})
  .then(() => res.send(req.params.id))
  .catch(next)
})

app.post('/',(req,res,next)=>{
  Product.create(req.body)
    .then(product =>res.json(product) )
    .catch(next)
})
