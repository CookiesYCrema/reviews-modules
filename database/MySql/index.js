const Sequelize = require('sequelize');

const sequelize = new Sequelize('yelpreviews', 'postgres', 'postgres1', {
  host: process.env.DB,
  // port: 5432,
  // host: 'localhost',
  // host: '54.183.247.91',
  dialect: 'postgres',
  operatorsAliases: false,

  logging: false,
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
