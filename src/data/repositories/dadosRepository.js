const mongoose = require("mongoose");

const serasaDadosSchema = new mongoose.schema({
    dataCriacao: Date.now,
    retornoDados: string
})

serasaDadosSchema.set('timestamps', true);
const modelSerasaData = mongoose.model("DadosSerasa", serasaDadosSchema);

module.exports = {modelSerasaData}

