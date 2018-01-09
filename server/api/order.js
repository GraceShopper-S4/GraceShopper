const router = require('express').Router()
const {Order,User} = require('../db/models')

// Get orders by userId
router.get('/', (req,res,next) => {
    if (req.user.id) {
        Order.findAll({where: {userId: req.user.id}})
        .then(orders => res.json(orders))
        .catch(next);
    }
    else{
        res.send("Please login to view orders")
    }
});

// Get a single order by order Id
router.get('/:id', (req,res,next) => {
    if (req.user.id) {
    Order.findOne({where: { id : req.params.id}})
        .then(order => res.json(order))
        .catch(next);
    }
    else{
        res.send("Please login to view orders")
    }
})


module.exports = router