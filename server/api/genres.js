const router = require('express').Router();
const { Product, Genre} = require("../db/models");
router.get('/:name', (req, res, next) => {
    Product.findAll({
        include: [{
            model: Genre, 
            where: {
                body: req.params.name
            }
        }]
    }).then(books => res.json(books))
})
module.exports = router;