const exporess = require("express");
const {
  authenticateUser,
  registerUser,
} = require("../controller/userController");

const userRoute = exporess.Router();

userRoute.route("/").get(authenticateUser);
userRoute.route("/").post(registerUser);

exports.userRoute = userRoute;
