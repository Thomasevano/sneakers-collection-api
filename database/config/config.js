require('dotenv').config();

const dbDetails = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'mysql',
}

module.exports = {
  development: dbDetails,
  test: dbDetails,
  production: dbDetails,
};