const mongoose = require('mongoose')

const serasacpfSchema = new mongoose.Schema({

    nome: String,
    cpf: String,
    data_nascimento: String,
    nome_mae: String,
    sexo: String,
    nomes_homonimos: String,
    status: String,
    
    endereco: String,
    bairro: String,
    cidade: String,
    estado: String,
    tel_comercial: String,
    tel_celular: String,
    tel_residencial: String,
   
    endereco: String,
    telefone: String,
    data: String,
  
    pendencias_comerciais: String,
    pendencias_bancarias: String,
    cheque_fundo: String,
    protestos: String,
    acoes_juridicas: String,
    falencias: String,
    dividas_vencidas: String,
    pendencias_internas: String,
 
    data: String,
    segmento: String,

    empresa: String,
    cnpj: String,
    ano_fundacao: String,
    data_ultima_atualizacao: String,
    participacao: String,
    uf: String,

    data_ultima_atualizacao_cadastral: String,
    nome: String,
    cpf: String,
    rg: String,
    orgao: String,
    uf: String,
    data_emissao: String,
    data_nascimento: String,
    uf_nascimento: String,
    estado_civil: String,
    dependentes: String,
    escolaridade: String,

    valor_escore: String,
    chance_pagamento: String,          
    expiredAt: { type: Date, default: Date.now, createIndexes: { expires: '2592000' } }
})

serasacpfSchema.set('timestamps', true);

const modelCpf = mongoose.model('userserasacpf', serasacpfSchema);

module.exports = {modelCpf};




