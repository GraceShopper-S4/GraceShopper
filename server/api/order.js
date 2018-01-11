const router = require('express').Router()
const {Order, User} = require('../db/models')

// Get orders by userId
router.get('/', (req, res, next) => {
    if (req.user.id) {
        Order.findAll({where: {userId: req.user.id}})
        .then(orders => res.json(orders))
        .catch(next);
    }
    else {
        res.send('Please login to view orders')
    }
});

// Get a single order by order Id
router.get('/:id', (req, res, next) => {
    if (req.user.id) {
    Order.findOne({where: { id: req.params.id}})
        .then(order => res.json(order))
        // JM - you will want to bring back the lineitems of this order as well
        .catch(next);
    }
    else {
        res.send('Please login to view orders')
    }
})

// Make a post
router.post('/', (req, res, next) => {
    //Update once front end cart population is done with line items
    Order.create(req.body)
        .then(order => res.json(order))
        .catch(next);
})


module.exports = router
