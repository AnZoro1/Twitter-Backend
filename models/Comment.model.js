const mongoose = require('mongoose')
const CommentSchema = mongoose.Schema({
  text: String,
  twitt: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Twitt',
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
})
const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
