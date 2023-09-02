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
  images: [{
    type: String,
  }],
  likes: {
    type: Number,
    allowNull: true
  }
});

//rating and place image

const Review = model('Review', reviewSchema);

module.exports = Review;
