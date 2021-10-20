const mongoose = require('mongoose')

const pwordSchema = new mongoose.Schema({
    password: String
})
const pwordModel = mongoose.model('passWord', pwordSchema)

module.exports = pwordModel

