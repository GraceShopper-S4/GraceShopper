const router = require('express').Router()
const { Order, User, LineItem } = require('../db/models')

// Get orders by userId
router.get('/', (req, res, next) => {
    if (req.user.id) {
        Order.findAll({where: {userId: req.user.id}})
        .then(orders => {
            //console.log('api routes orders', orders)
            res.json(orders)})
        .catch(next);
    }
    else {
        res.send('Please login to view orders')
    }
});

// Get a single order by order Id
router.get('/:id', (req, res, next) => {
    if (req.user.id) {
    Order.findOne({
        include:[{
            model:LineItem, // Works when we remove the condition of the user !
            where:{
                orderId:req.params.id
            }
        }],
        where: { id: req.params.id}
        })
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
    //where = {}
    Order.findOrCreate({where: {userId: req.user.id, status: 'Cart'}, defaults: {totalPrice: req.body.totalPrice}})
    .then((instance, wasCreated) => {
        console.log('instance is', instance)
        /*if(!wasCreated) {
            console.log('exists', instance)
        } else {
            console.log('created', instance)
        }*/res.json(instance)
    })
    .catch(next)
})


module.exports = router
