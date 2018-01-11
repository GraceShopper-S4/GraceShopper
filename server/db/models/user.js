const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      isEmpty: false,
      notNull: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false,
      notNull: true
    }
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  shippingCity: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  shippingState: {
    type: Sequelize.STRING,
    validate: {
      len: [2],
      notEmpty: true,
      notNull: true
    }
  },
  shippingZipCode: {
    type: Sequelize.INTEGER,
    validate: {
      len: [5],
      notEmpty: true,
      notNull: true
    }
  },
  billingCity: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  billingState: {
    type: Sequelize.STRING,
    validate: {
      len: [2],
      notEmpty: true,
      notNull: true
    }
  },
  billingZipCode: {
    type: Sequelize.INTEGER,
    validate: {
      len: [5],
      notEmpty: true,
      notNull: true
    }
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

/**
 * classMethods
 */
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
