// backend/models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import Sequelize instance

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skills: {
    type: DataTypes.JSON,  // Store skills as JSON array
    defaultValue: [],
  },
  bio: {
    type: DataTypes.TEXT,
  },
  avatarUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
