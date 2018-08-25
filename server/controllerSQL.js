const _ = require('lodash');
const sequelize = require('../database/MySql/index.js');
const { RestaurantModel, ReviewModel, UserModel } = require('../database/MySql/models.js');

module.exports = {
  getST: (req, res) => {
    res.status(200).send('hi');
  },
  get: (req, res) => {
    sequelize.query(
      'SELECT * FROM reviews r JOIN restaurants rs ON r.restaurant_id = rs.restaurant_id JOIN users u ON r.user_id = u.user_id WHERE r.restaurant_id = $restaurant limit 10', { bind: { restaurant: req.query.id || 1 + Math.floor(Math.random() * 1000000) }, type: sequelize.QueryTypes.SELECT },
    )
      .then((reviewData) => {
        // res.status(200).send(reviewData);
        const resReviews = reviewData.map(r => ({
          _id: r.review_id,
          restaurant: r.restaurant,
          reviewData: {
            rating: r.rating,
            time_created: r.time_created,
            text: r.text,
            review_pic: r.review_pic,
          },
          user: {
            name: r.name,
            location: r.location,
            friends: r.friends,
            reviews: r.reviews,
            photos: r.photos,
            elite: r.elite,
            image_url: r.user_image,
          },
          usefulVotes: r.useful_votes,
          funnyVotes: r.funny_votes,
          coolVotes: r.cool_votes,
        }));
        res.status(200).send(resReviews);
      })
      .catch(err => res.status(400).send(err));
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
    sequelize.query('UPDATE reviews \
    SET useful_votes = useful_votes + 1 WHERE review_id = $id', { bind: { id: req.params.id }, type: sequelize.QueryTypes.SELECT })
      .then(updateData => res.status(202).send(updateData))
      .catch(err => res.status(404).send(err));
  },
  funny: (req, res) => {
    sequelize.query('UPDATE reviews \
    SET funny_votes = funny_votes + 1 WHERE review_id = $id', { bind: { id: req.params.id }, type: sequelize.QueryTypes.SELECT })
      .then(updateData => res.status(202).send(updateData))
      .catch(err => res.status(404).send(err));
  },
  cool: (req, res) => {
    sequelize.query('UPDATE reviews \
    SET cool_votes = cool_votes + 1 WHERE review_id = $id', { bind: { id: req.params.id }, type: sequelize.QueryTypes.SELECT })
      .then(updateData => res.status(202).send(updateData))
      .catch(err => res.status(404).send(err));
  },
};
