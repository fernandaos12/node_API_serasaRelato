/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */
/* Bloco pendencias financeiras */

const { resultserasa } = require('../serasaService')

const consultaN240 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN240.IndexOf('N240')

var blocoN240 = consultaN240.substring(indexBloco, tamanhoBloco)

var subtipo = blocoN240.substring(5, 2)
if (subtipo === '00') {
  var dataOcorrencia = blocoN240.substring(7, 8)
  var modalidade = blocoN240.substring(15, 30)
  var avalista = blocoN240.substring(45, 1)
  var tipoMoeda = blocoN240.substring(46, 3)
  var valor = blocoN240.substring(49, 15)
  var contrato = blocoN240.substring(64, 16)
  var origem = blocoN240.substring(80, 30)
  var siglaEmbratel = blocoN240.substring(110, 4)
  var reservado = blocoN240.substring(114, 2)
}

if (subtipo === '01') {
  var subjudice = blocoN240.substring(7, 1)
  var msgSubjudice = blocoN240.substring(8, 76)
  var tipoAnotacao = blocoN240.substring(84, 1)
  switch (tipoAnotacao) {
    case 'V': 'Pefin'
      break
    case 'I': 'Refin'
      break
    case '5': 'Dívida vencida'
      break
    default: 'Não Consta'
      break
  }
  var reservadoSerasa = blocoN240.substring(85, 10)
  var reservado = blocoN240.substring(95, 21)
}

if (subtipo === '90') {
  var totalOcorrencias = blocoN240.substring(7, 5)
  var dataOcorrenciaMaisAntiga = blocoN240.substring(12, 6)
  var dataOcorrenciaMaisRecente = blocoN240.substring(18, 6)
  var valorTotal = blocoN240.substring(24, 15)
  var tipoAnotacao = blocoN240.substring(24, 15)
  switch (tipoAnotacao) {
    case 'V': 'Pefin'
      break
    case 'I': 'Refin'
      break
    case '5': 'Dívida vencida'
      break
    default: 'Não Consta'
      break
  }
  var reservado = blocoN240.substring(39, 77)
}

if (subtipo === '99') {
  var msg = blocoN240.substring(7, 40)
  var reservado = blocoN240.substring(47, 69)
}

module.exports = {
  msg,
  subtipo,
  dataOcorrencia,
  reservado,
  modalidade,
  avalista,
  tipoMoeda,
  valor,
  contrato,
  origem,
  siglaEmbratel,
  totalOcorrencias,
  dataOcorrenciaMaisAntiga,
  dataOcorrenciaMaisRecente,
  valorTotal,
  subjudice,
  msgSubjudice,
  tipoAnotacao,
  reservadoSerasa

}
