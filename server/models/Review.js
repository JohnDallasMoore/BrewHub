const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  content: {
    type: String,
    minlength: 1,
    maxlength: 280,
    required: true,
    trim: true,
  },
  rating:{
    type: Number,
    trim: true,
  },
  image: {
    type: String,
  },
  likes: {
    type: Number,
    allowNull: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
});

//rating and place image

const Review = model('Review', reviewSchema);

module.exports = Review;
