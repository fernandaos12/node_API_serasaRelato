const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  origin: String,
  controller: String,
  when: Date,
  request: String,
  response: String,
  exception: String
})

const model = mongoose.model('errorzplugin', schema)

module.exports = model
