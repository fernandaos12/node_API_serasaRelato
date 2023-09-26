const mongoose = require('mongoose')

const serasaDadosSchema = new mongoose.Schema({
  retornoDados: String
})

serasaDadosSchema.set('timestamps', true)
const modelSerasaData = mongoose.model('DadosSerasa', serasaDadosSchema)

module.exports = { modelSerasaData }
