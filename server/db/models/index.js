const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');
const LineItem = require('./lineItem');
const Genre = require('./genre');
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Order.belongsTo(User);
Order.hasMany(LineItem);

LineItem.belongsTo(Order);
LineItem.belongsTo(Product); //Each LineItem has a productId to avoid duplicate data storage;
LineItem.belongsTo(User);

Genre.belongsToMany(Product, {through: 'ProductGenres'});

Product.belongsToMany(Genre, {through: 'ProductGenres'});
Product.hasMany(Review);

Review.belongsTo(Product);
Review.belongsTo(User);

User.hasMany(Review);
User.hasMany(Order);
User.hasMany(Order);

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
  Genre
}
