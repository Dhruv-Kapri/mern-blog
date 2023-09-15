const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true, min: 4, unique: true },
  password: { type: String, require: true },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
