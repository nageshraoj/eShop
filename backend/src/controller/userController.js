const { userModel } = require('../models/userModel')
const { validationResult } = require('express-validator')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: errors.array() })
    }
    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(12)
    const newUser = {
      username,
      email,
      password: await bcrypt.hash(password, salt),
    }
    const user = userModel.create(newUser)
    const token = JWT.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: user.id,
      },
      process.env.MY_SECRET
    )
    res.status(200).json({ status: true, token })
  } catch (error) {
    res.status(400).json({ status: false, error })
  }
}

exports.authenticateUser = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: errors.array() })
    }
    // var decoded = jwt.verify(token, process.env.MY_SECRET)
    const { email, password } = req.body
    const user = await userModel.find({ email })
    const validUser = await bcrypt.compare(password, user[0].password)
    if (!validUser) {
      return res
        .status(404)
        .json({ status: false, error: 'Invalid user or password' })
    }
    res.status(200).json({ status: true, user })
  } catch (error) {
    res.status(400).json({ status: false, error })
  }
}
