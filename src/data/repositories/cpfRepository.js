const mongoose = require('mongoose')

const serasacpfSchema = new mongoose.Schema({

    nome: String,
    cpf: String,
    data_nascimento: String,
    nome_mae: String,
    sexo: String,
    nomes_homonimos: String,
    status: String,
    dependentes: String,
    escolaridade: String,
    estado_civil: String,

    endereco: String,
    bairro: String,
    cidade: String,
    estado: String,
    tel_comercial: String,
    tel_celular: String,
    tel_residencial: String,
   
    enderecoComercial: String,
 
    pendencias_comerciais: String,
    pendencias_bancarias: String,
    cheque_fundo: String,
    protestos: String,
    acoes_juridicas: String,
    falencias: String,
    dividas_vencidas: String,
 
    data_divida: String,
    segmento_divida: String,

    empresa_credora: String,
    cnpj_empresa_credora: String,
    uf_empresa_credora: String,
    data_insercao_dados_pela_empresa: String,
    score: String,
    chance_pagamento: String,
       
    expiredAt: { type: Date, default: Date.now, createIndexes: { expires: '2592000' } }
})

serasacpfSchema.set('timestamps', true);

const modelCpf = mongoose.model('userserasacpf', serasacpfSchema);

module.exports = {modelCpf};




