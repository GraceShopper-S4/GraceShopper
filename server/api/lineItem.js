const router = require('express').Router();
const { Order, User, LineItem } = require('../db/models');

router.post('/', (req, res, next) => {
    LineItem.findOrCreate({
        where: {
            // 'userId': req.user.id,
           // 'orderKeyHash': req.body.orderKeyHash, // should be names orderKeyHash and should come from user which will be avalible globally!! 
            'productId': req.body.productId,
            'price':req.body.price,
            'quantity':req.body.quantity
        }
    })
    .then((instance, wasCreated) => {
        if(!wasCreated) {
            console.log('exists', instance)
        } else {
            console.log('created', instance)
        }res.json(instance)
    })
    // .then(data => res.json(data))
    .catch(next)
})

router.get('/:orderId', (req, res, next) => {
    LineItem.findAll({
        where: {
            orderId: req.params.orderId
        }
    })
    .then(order => res.json(order))
    .catch(next)
})

module.exports = router;


