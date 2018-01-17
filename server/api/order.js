const router = require('express').Router()
const { Order, User, LineItem } = require('../db/models')

// Get orders by userId
router.get('/', (req, res, next) => {
    if (req.user) {
        Order.findAll({where: {userId: req.user.id}})
        .then(orders => {
            res.json(orders)})
        .catch(next);
    }
    else {
        Order.findAll({where: {userId: req.session.orderId}})
        .then(orders => {
            res.json(orders)})
        .catch(next);
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
        .catch(next);
    }
    else {
        res.send('Please login to view orders')
    }
})

// Make a post
router.post('/', (req, res, next) => {
    let randomId = Math.floor(Math.random()*200+1000)
    if (req.user) {
        Order.findOrCreate({where: {userId: req.user.id , status: 'Cart'}, defaults: {totalPrice: req.body.totalPrice}})
        .then((instance, wasCreated) => {
            res.json(instance)
        })
        .catch(next)
    }
    else {
        req.session.orderId =randomId
        Order.findOrCreate({where: {userId: randomId, status: 'Cart'}, defaults: {totalPrice: req.body.totalPrice}})
        .then((instance, wasCreated) => {
            res.json(instance)
        })
        .catch(next)
    }
})

router.put('/', (req, res, next) => {
    Order.update(req.body, {
        where: { id: req.body.id}
        })
        .then((updated) => res.send(updated))
        .catch(next);
})


module.exports = router
