const mongoose = require('mongoose')
const SaveSchema = mongoose.Schema({
  name: String,
  twitt: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Twitt'
  }
})
const Save = mongoose.model('Save', SaveSchema)
module.exports = Save
