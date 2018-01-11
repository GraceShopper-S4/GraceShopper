const Sequelize = require('sequelize');
// const pkg = require('../../package.json');
// const Promise = require('bluebird');
const { User, Product, Review, Order, LineItem } = require('./server/db/models');
const db = require('./server/db/db');

const user = [
  {
    email: "sc@gmail.com",
    password: "abcd",
    shippingCity: "New York",
    shippingState: "NY",
    shippingZipCode: "11201",
    billingCity: "New York",
    billingState: "NY",
    billingZipCode: "11201"
  },
  {
    email: "ab@gmail.com",
    password: "asdf",
    shippingCity: "New Jersey",
    shippingState: "NJ",
    shippingZipCode: "07080",
    billingCity: "New Jersey",
    billingState: "NJ",
    billingZipCode: "07080"
  },
  {
    email: "cd@gmail.com",
    password: "qwer",
    shippingCity: "San Jose",
    shippingState: "CA",
    shippingZipCode: "95138",
    billingCity: "San Fransisco",
    billingState: "CA",
    billingZipCode: "95301"
  },
  {
    email: "ef@gmail.com",
    password: "zxcv",
    shippingCity: "Boston",
    shippingState: "MA",
    shippingZipCode: "20115",
    billingCity: "Boston",
    billingState: "MA",
    billingZipCode: "20115"
  }
];

const product = [
  {
    title: 'Harry Potter',
    description: 'Harry you are a Wizard',
    price: '10',
    inventory: '10'
 },
  {
    title: 'Cracking the Coding Interview',
    description: 'Its all about optimization',
    price: '1000',
    inventory: '2'
  },
  {
    title: 'Twist of Faith',
    description: 'Its all twisted',
    price: '15',
    inventory: '100'
  },
  {
    title: 'Famous Five',
    description: 'Its about an adventure',
    price: '5',
    inventory: '1000'
  }
];

const review = [
  {
    body: 'Great Book',
    rating: '4',
    productId: '1',
    userId: '1'
  },
  {
    body: 'Must Read',
    rating: '5',
    productId: '2',
    userId: '2'
  },
  {
    body: 'Bad Book',
    rating: '1',
    productId: '3',
    userId: '1'
  },
  {
    body: 'Nice Read',
    rating: '4',
    productId: '3',
    userId: '4'
  }
];

const order = [
  {
    totalPrice: '1000',
    status: 'Shipped',
    userId: '1'
  },
  {
    totalPrice: '10',
    status: 'Shipped',
    userId: '2'
  },
  {
    totalPrice: '200',
    status: 'Shipped',
    userId: '2'
  },
  {
    totalPrice: '100',
    status: 'Shipped',
    userId: '4'
  }
];

const lineItem = [
  {
    price: '10',
    quantity: '10',
    // currentProductId: '',
    orderId: '2'
  },
  {
    price: '100',
    quantity: '5',
    // currentProductId: '3',
    orderId: '4'
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
