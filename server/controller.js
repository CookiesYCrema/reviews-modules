const _ = require('lodash');
const {
  RestaurantModel,
  // ReviewUserModel,
  ReviewModel,
  // ReviewDataModel,
} = require('../database/models');

module.exports = {
  get: (req, res) => {
    const { reviewId } = req.query;
    const query = reviewId ? { reviewId } : { $limit: 10 }; 
    ReviewModel.find(query, (err, reviewData) => {
      if (err) {
        res.status(404).send(err);
      } else {
        const resReviews = reviewData.map((review) => {
          const resReview = _.pick(review, ['restaurant', 'usefulVotes', 'funnyVotes', 'coolVotes']);
          resReview.reviewData = _.pick(review, ['rating', 'time_created', 'text', 'review_pic']);
          resReview.user = _.pick(review, ['image_url', 'name', 'location', 'friends', 'reviews', 'photos', 'elite']);
          resReview._id = review.reviewId;
          return resReview;
        });
        res.status(200).send(resReviews);
      }
    });
  },
  post: (req, res) => {
    const review = _.pick(req.body, ['reviewId', 'restaurant', 'rating', 'text', 'review_pic', 'image_url', 'name', 'location', 'friends', 'reviews', 'photos', 'elite']);
    review.time_created = new Date();
    // const {
    //   reviewId, rating, text, review_pic, image_url, name, location, friends, reviews, photos, elite,
    // } = req.body;
    const reviewModel = new ReviewModel(review);
    reviewModel.save({ if_not_exist: true }, (err, reviewData) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
      } else {
        res.status(201).send(reviewData);
      }
    });
  },
  useful: (req, res) => {
    const reviewId = req.params.id;
    console.log('revID in useful post: ', reviewId);
    ReviewModel.findOne({
      reviewId,
    }, (err, reviewData) => {
      if (err) { res.status(404).send(err); } else {
        ReviewModel.update({
          reviewId,
        }, {
          usefulVotes: reviewData.usefulVotes + 1,
        }, (err, reviewData) => {
          if (err) { res.status(404).send(err); } else {
            res.status(202).send(reviewData);
          }
        });
      }
    });
  },
  funny: (req, res) => {
    const reviewId = req.params.id;
    ReviewModel.findOne({
      reviewId,
    }, (err, reviewData) => {
      if (err) { res.status(404).send(err); } else {
        ReviewModel.update({
          reviewId,
        }, {
          funnyVotes: reviewData.funnyVotes + 1,
        }, (err, reviewData) => {
          if (err) { res.status(404).send(err); } else {
            res.status(202).send(reviewData);
          }
        });
      }
    });
  },
  cool: (req, res) => {
    const reviewId = req.params.id;
    ReviewModel.findOne({
      reviewId,
    }, (err, reviewData) => {
      if (err) { res.status(404).send(err); } else {
        ReviewModel.update({
          reviewId,
        }, {
          coolVotes: reviewData.coolVotes + 1,
        }, (err, reviewData) => {
          if (err) { res.status(404).send(err); } else {
            res.status(202).send(reviewData);
          }
        });
      }
    });
  },
};

// get: (req, res) => {
//   console.log('get');
//   Review.find({}, (err, reviews) => {
//     if (err) { console.log(err); }
//     res.status(200).send(reviews);
//   });
// },
// post: (req, res) => {
//   new Review({
//     restaurant: faker.company.companyName(),
//     reviewData: {
//       id: faker.random.uuid(),
//       rating: faker.random.number(5),
//       : new Date(): faker.date.past(),
//       text: faker.lorem.paragraphs(),
//       review_pic: faker.image.food(),
//     },
//     user: {
//       image_url: faker.image.avatar(),
//       name: faker.name.findName(),
//       location: faker.address.city(),
//       friends: faker.random.number(),
//       reviews: faker.random.number(),
//       photos: faker.random.number(),
//       elite: faker.random.boolean(),
//     },
//   }).save((err, newReview) => {
//     if (err) { console.log(err); }
//     res.status(201).send(newReview);
//   });
// },
// useful(req, res) {
//   const query = { _id: req.params.id };
//   const options = { new: true };

//   Review.findOneAndUpdate(query, { $inc: { usefulVotes: 1 } }, options)
//     .then((review) => {
//       res.json(review);
//     })
//     .catch((err) => {
//       console.log(query);
//       res.status(500).send('error updating review', err);
//     });
// },
// funny(req, res) {
//   const query = { _id: req.params.id };
//   const options = { new: true };

//   Review.findOneAndUpdate(query, { $inc: { funnyVotes: 1 } }, options)
//     .then((review) => {
//       res.json(review);
//     })
//     .catch((err) => {
//       res.status(500).send('error updating review', err);
//     });
// },
// cool(req, res) {
//   const query = { _id: req.params.id };
//   const options = { new: true };

//   Review.findOneAndUpdate(query, { $inc: { coolVotes: 1 } }, options)
//     .then((review) => {
//       res.json(review);
//     })
//     .catch((err) => {
//       res.status(500).send('error updating review', err);
//     });
// },
