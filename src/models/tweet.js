const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({ 
  poster: String,
  poster_id: Number,
  content: String,
  like: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});


module.exports = mongoose.model('Tweet', TweetSchema);