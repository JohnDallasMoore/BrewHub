const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt");
// const sequelize = require("../config/connection");


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],
  statuses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Status'
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  badges: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Badge'
    }
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
