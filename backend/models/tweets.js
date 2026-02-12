const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  user: String,
  content: String,
  nbLike: Number,
  date: Date,
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;