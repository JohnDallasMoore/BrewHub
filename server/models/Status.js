const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const statusSchema = new Schema({
  content: {
    type: String,
    minlength: 1,
    maxlength: 280,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  likes: {
    type: Number,
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
  userName: {
    type: String,
  },
});

//rating and place image

const Status = model('Status', statusSchema);

module.exports = Status;
