const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  DOB:String,
  image:String,
  createdAt: String
});

module.exports = model('User', userSchema);