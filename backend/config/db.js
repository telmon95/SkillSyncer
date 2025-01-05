// backend/config/db.js
const { Sequelize } = require('sequelize');

// MySQL database connection configuration
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'skillsyncer',
});

module.exports = sequelize;
