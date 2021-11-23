   
const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: String,
 name:String,
 email:String,
 phoneNumber:String,
 DateOfBirth:String,
 image:String,
  createdAt: String,
 
 
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);