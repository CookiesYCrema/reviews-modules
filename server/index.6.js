require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('../database/MySql/models.js');
const routes = require('./routes.js');

require('dotenv').config();

// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })

const port = 3060;
const server = express();

server.use(helmet());
// server.use(morgan());
// server.use(parser.json());
server.use(express.static(path.join(__dirname, '../client/dist')));

// server.use(parser.urlencoded({ extended: false }));

server.use('/api/reviews', routes);

server.listen(port, () => console.log(`Server is listening on port ${port}`));
