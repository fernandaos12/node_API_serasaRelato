const mongoose = require('mongoose')

const serasacnpjSchema = new mongoose.Schema({

    cnpj: String,
    razao_social: String,
    nome_fantasia: String,
    registro: String,
    data_registro: String,
    nire: String,
    fundacao: String,
    opcao_tributaria: String,
    numero_funcionarios: String,
    inscricao_estadual: String,
    ramo_atividade: String,
    inscricao_estadual: String,
    endereco: String,
    bairro: String,
    cidade: String,
    cep: String,
    estado: String,
    telefone: String,
    site: String,
    tipo_sociedade: String,
    codigo_ativ_serasa: String,
    importacao_sobre_compras: String,
    exportacao_sobre_vendas: String,
    cnae: String,
    filiais: String,
    quadro_sociaal: String,
    capital_social: String,
    capital_realizado: String,
    origem: String,
    controle: String,
    natureza: String,
    cnpj_socio: String,
    entrada: String,
    nacionalidade: String,
    capital: String,
    administracao: String,
    cpf_cnpj_administracao: String,
    nacionalidade_administracao: String,
    mandato: String,
    data_consulta: String,
    cnpj_consultante: String,
    razao_social_consultante: String,
    qdade_consultas: String,
    refin: String,
    pein: String,
    dividas_vencidas: String,
    falencia: String,
    protestos: String,
    cheques: String,
    recheques: String,
    cheques_extrav_sustados: String,
    //expiredAt: { type: Date, default: Date.now, index: { expires: '2592000' } }

})

serasacnpjSchema.set('timestamps', true);

const modelCnpj = mongoose.model('userserasacnpj', serasacnpjSchema);

module.exports = modelCnpj;