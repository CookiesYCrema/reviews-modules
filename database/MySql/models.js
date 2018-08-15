const Sequelize = require('sequelize');
const models = require('./index');

const RestaurantModel = models.define('restaurant', {
  restaurant_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  restaurant: Sequelize.STRING,
}, {
  timestamps: false,
});


const UserModel = models.define('user', {
  user_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: Sequelize.STRING,
  user_image: Sequelize.STRING,
  location: Sequelize.STRING,
  friends: Sequelize.INTEGER,
  reviews: Sequelize.INTEGER,
  photos: Sequelize.INTEGER,
  elite: Sequelize.CHAR,
}, {
  timestamps: false,
});

const ReviewModel = models.define('review', {
  review_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  restaurant_id: {
    type: Sequelize.INTEGER,
    // references: {
    //   model: RestaurantModel,
    //   key: 'restaurant_id',
    // },
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: UserModel,
      key: 'user_id',
    },
  },
  useful_votes: { type: Sequelize.INTEGER, defaultValue: 0 },
  funny_votes: { type: Sequelize.INTEGER, defaultValue: 0 },
  cool_votes: { type: Sequelize.INTEGER, defaultValue: 0 },
  rating: Sequelize.INTEGER,
  time_created: Sequelize.CHAR(30),
  // {
  //   type: Sequelize.DATE,
  //   field: 'beginTime',
  //   defaultValue: Sequelize.literal('NOW()'),
  // },
  text: Sequelize.TEXT,
  review_pic: Sequelize.STRING,
}, {
  setterMethods: {
    upvoteUseful() {
      this.setDataValue('useful_votes', this.useful_votes + 1);
    },
    upvoteFunny() {
      this.setDataValue('funny_votes', this.funny_votes + 1);
    },
    upvoteCool() {
      this.setDataValue('cool_votes', this.cool_votes + 1);
    },
  },
  timestamps: false,
});
const force = false;
RestaurantModel.sync({ force }).then((err) => {
  if (err) { throw err; } else { console.log('restaurants connected'); }
});
UserModel.sync({ force }).then((err) => {
  if (err) { throw err; } else { console.log('Users connected'); }
});
ReviewModel.sync({ force }).then((err) => {
  if (err) { throw err; } else { console.log('Reviews connected'); }
});

module.exports = {
  RestaurantModel,
  ReviewModel,
  UserModel,
};
