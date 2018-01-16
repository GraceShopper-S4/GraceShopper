const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');
const LineItem = require('./lineItem');
const Genre = require('./genre');
const Address = require('./address');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

//Order.belongsTo(User);



LineItem.belongsTo(Product); //Each LineItem has a productId to avoid duplicate data storage;
// LineItem.belongsTo(User);
LineItem.belongsTo(Order);

Genre.belongsToMany(Product, {through: 'ProductGenres'});

Product.belongsToMany(Genre, {through: 'ProductGenres'});
Product.hasMany(Review);

Review.belongsTo(Product);
Review.belongsTo(User);

User.hasMany(Review);
User.hasMany(Order);

Address.hasOne(User);

Order.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Review,
  Order,
  LineItem,
  Genre,
  Address
}


//NEW SCHEMA 
/* 
    1. Upon login, user receives a uniquely hashed order key. This key will be used to
    track every line item within this order.
    2. When a person adds a line item to the cart, this line item will be updated with the person's uniquely 
    hashed order key. That way, every order is unique. 
    3. When a person checks out and COMPLETES the purchase, the person will receive a newly hashed order key which will
    represent his current order. 
    4. At the same time, the orderkeys table will get a new row, with the order key, the date of the order and the user id
    5. When a person wants to look up their own orders, we will go to the orderkey table and search by the user id for all of the keys.
    Those keys will then be used to access the line items table which will have all of the items he has ever ordered. Those items can be split by each order key. 
*/
