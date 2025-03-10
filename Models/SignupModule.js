const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const SignupModel = mongoose.model("register", SignupSchema);

module.exports = SignupModel;
