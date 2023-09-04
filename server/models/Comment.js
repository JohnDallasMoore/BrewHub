const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema ({
      content: {
        type: String,
        required: true,
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
      review: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      },
      status: {
        type: Schema.Types.ObjectId,
        ref: 'Status'
      },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
