const exporess = require('express')
const { body } = require('express-validator')
const {
  authenticateUser,
  registerUser,
} = require('../controller/userController')

const userRoute = exporess.Router()

userRoute
  .route('/')
  .get(
    body('email', 'Invalid Email format').isEmail(),
    body('password', 'Password is required').not().isEmpty(),
    authenticateUser
  )
userRoute
  .route('/')
  .post(
    body('username', 'User Name is required').not().isEmpty(),
    body('email', 'Invalid Email format').isEmail(),
    body('password', 'Password is required').isLength({ min: 6 }),
    registerUser
  )

exports.userRoute = userRoute
