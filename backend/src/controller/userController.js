const { userModel } = require("../models/userModel");

exports.registerUser = async (req, res, next) => {
  try {
    const user = userModel.create(req.body);
    res.status(200).json({ status: true, user });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
};

exports.authenticateUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = userModel.find({ username });
    if (password !== user.password) {
      return res
        .status(404)
        .json({ status: false, error: "Invalid user or password" });
    }
    res.status(200).json({ status: true, user });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
};
