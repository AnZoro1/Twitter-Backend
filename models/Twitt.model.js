const mongoose = require('mongoose')

const TwittSchema = mongoose.Schema({
  name: String,
  comment: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Comment',
  },
  likes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
  ],
})
const Twitt = mongoose.model('Twitt', TwittSchema)
module.exports = Twitt
