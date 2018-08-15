const models = require('./index');

const RestaurantModel = models.loadSchema('restaurant', {
  fields: {
    restaurant_id: 'int',
    restaurant: 'text',
  },
  key: ['restaurant_id'],
});

const ReviewModel = models.loadSchema('review', {
  fields: {
    review_id: 'int',
    restaurant_id: 'int',
    user_id: 'int',
    useful_votes: { type: 'int', default: 0 },
    funny_votes: { type: 'int', default: 0 },
    cool_votes: { type: 'int', default: 0 },
    rating: 'int',
    time_created: 'timestamp',
    text: 'text',
    review_pic: 'text',
  },
  key: ['review_id', 'rating'],
});

const UserModel = models.loadSchema('user', {
  fields: {
    user_id: 'int',
    name: 'text',
    user_image: 'text',
    location: 'text',
    friends: 'int',
    reviews: 'int',
    photos: 'int',
    elite: 'boolean',
  },
  key: ['user_id'],
});

RestaurantModel.syncDB((err) => {
  if (err) throw err;
});
UserModel.syncDB((err) => {
  if (err) { throw err; }
});
ReviewModel.syncDB((err) => {
  if (err) { throw err; } else { console.log('cassandraDB connected'); }
});

module.exports = {
  RestaurantModel,
  ReviewModel,
  UserModel,
};
