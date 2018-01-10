const Sequelize = require('sequelize');
// const pkg = require('../../package.json');
const Promise = require('bluebird');
const { User, Product, Review, Order, LineItem } = require('./server/db/models');
const db = require('./server/db/db');

const user = [
  {
    email: "sc@gmail.com",
    password: "abcd"
  },
  {
    email: "ab@gmail.com",
    password: "hi"
  },
  {
    email: "cd@gmail.com",
    password: "slack"
  },
  {
    email: "ef@gmail.com",
    password: "nice"
  }
];

const product = [
  {
    title: "Harry Potter",
    description: "Harry you are a Wizard",
    price: "10",
    inventory: "10",
    genre: "Fiction"
  },
  {
    title: "Cracking the Coding Interview",
    description: "Its all about optimization",
    price: "1000",
    inventory: "2",
    genre: "Education"
  },
  {
    title: "Twist of Faith",
    description: "Its all twisted",
    price: "15",
    inventory: "100",
    genre: "Action"
  },
  {
    title: "Famous Five",
    description: "Its about an adventure",
    price: "5",
    inventory: "1000",
    genre: "Adventure"
  }
];

const review = [
  {
    review: "Great Book",
    rating: "4",
    productId: "1",
    userId: "1"
  },
  {
    review: "Must Read",
    rating: "5",
    productId: "2",
    userId: "2"
  },
  {
    review: "Bad Book",
    rating: "1",
    productId: "3",
    userId: "1"
  },
  {
    review: "Nice Read",
    rating: "4",
    productId: "3",
    userId: "4"
  }
];

const order = [
  {
    totalPrice: "1000",
    status: "Cart",
    userId: "1"
  },
  {
    totalPrice: "10",
    status: "Checkout",
    userId: "2"
  },
  {
    totalPrice: "200",
    status: "Cart",
    userId: "2"
  },
  {
    totalPrice: "100",
    status: "Checkout",
    userId: "4"
  }
];

const lineItem = [
  {
    price: "10",
    quantity: "1",
    currentProductId: "1",
    orderId: "2"
  },
  {
    price: "100",
    quantity: "5",
    currentProductId: "3",
    orderId: "4"
  }
];

const seed = () =>
  Promise.all(user.map(user => User.create(user)))
    .then(() => Promise.all(product.map(product => Product.create(product))))
    .then(() => Promise.all(review.map(review => Review.create(review))))
    .then(() => Promise.all(order.map(order => Order.create(order))))
    .then(() => Promise.all(lineItem.map(lineItem => LineItem.create(lineItem))));


// JM - could seed using include: [otherModel]. Example is from tripplanner - 
// https://github.com/FullstackAcademy/1710-FSA-RM-Library/blob/master/01-junior-phase/19-tripplanner-routing/solution/server/seed-ny.js
// 
// .create(item, {
//   include: [otherModel]
// });


const main = () => {
  console.log('Syncing db...');
  db
    .sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
