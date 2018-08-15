const _ = require('lodash');
const { RestaurantModel, ReviewModel, UserModel } = require('../database/MySql/models.js');

module.exports = {
  get: (req, res) => {

  },
  post: (req, res) => {
    ReviewModel.create({
      review_id: 1,
      restaurant_id: 1,
      user_id: 1,
      rating: 5,
      text: 'jgkj',
      beginTime: '2017-08-11 20:38:08',
    })
      .then((review) => { res.status(200).send(review); })
      .catch((err) => { res.status(404).send(err); });
  },
  useful: (req, res) => {

  },
  funny: (req, res) => {

  },
  cool: (req, res) => {

  },
}