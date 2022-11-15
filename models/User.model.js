const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
  name: String,
  twitt: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Twitt',
  },
  save: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Twitt',
  }],
})
const User = mongoose.model('User', UserSchema)
module.exports = User
