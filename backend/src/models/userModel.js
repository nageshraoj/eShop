const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'User Name required'],
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: [true, 'Email already exists'],
  },
  password: {
    type: String,
    required: [true, 'Password required'],
  },
  creted: {
    type: Date,
    default: Date.now,
  },
})

exports.userModel = new mongoose.model('users', userSchema)
