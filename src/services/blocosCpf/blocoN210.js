/* eslint-disable no-redeclare */
/* eslint-disable no-unused-expressions */
/* Bloco alerta de documentos roubados */
/*
Este registro pode ocorrer até 15 vezes ou até a quantidade total de mensagens cadastradas .
Subtipo 01 – Informações de DDD/telefones ref. documentos roubados
Máximo de 3 DDD/Telefones de contato do titular do documento .
Subtipo 99 - Caso não existam mensagens de documentos roubados, retornará somente este registro com a mensagem explicativa. */

const { resultserasa } = require('../serasaService')

const consultaN210 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN210.IndexOf('N210')

var blocoN210 = consultaN210.substring(indexBloco, tamanhoBloco)

var subtipo = blocoN210.substring(5, 2)
if (subtipo === '00') {
  var numMensagem = blocoN210.substring(7, 2)
  var totalMensagens = blocoN210.substring(9, 2)
  var tipoDocumento = blocoN210.substring(11, 6)
  var numeroDocumento = blocoN210.substring(17, 20)
  var motivoOcorrencia = blocoN210.substring(37, 4)
  var dataOcorrencia = blocoN210.substring(41, 10)
  var reservado = blocoN210.substring(51, 59)
}

if (subtipo === '01') {
  var codDDD1 = blocoN210.substring(7, 40)
  var numTelefone1 = blocoN210.substring(47, 69)
  var codDDD2 = blocoN210.substring(18, 3)
  var numTelefone2 = blocoN210.substring(21, 8)
  var codDDD3 = blocoN210.substring(29, 3)
  var numTelefone3 = blocoN210.substring(32, 8)
  var reservado = blocoN210.substring(40, 76)
}

if (subtipo === '99') {
  var msg = blocoN210.substring(7, 40)
  var reservado = blocoN210.substring(47, 69)
}

module.exports = {
  msg,
  subtipo,
  numMensagem,
  totalMensagens,
  tipoDocumento,
  numeroDocumento,
  motivoOcorrencia,
  dataOcorrencia,
  reservado,
  codDDD1,
  numTelefone1,
  codDDD2,
  numTelefone2,
  codDDD3,
  numTelefone3
}
