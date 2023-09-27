/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */
/* Bloco cheques sem fundos - bacen */

const { resultserasa } = require('../serasaService')

const consultaN270 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN270.IndexOf('N270')

var blocoN270 = consultaN270.substring(indexBloco, tamanhoBloco)

var subtipo = blocoN270.substring(5, 2)
if (subtipo === '00') {
  var dataOcorrencia = blocoN270.substring(7, 8)
  var numCheque = blocoN270.substring(15, 10)
  var alineaCheque = blocoN270.substring(25, 5)
  var qdadeCCF = blocoN270.substring(30, 5)
  var valor = blocoN270.substring(35, 15)
  var numeroBanco = blocoN270.substring(50, 3)
  var nomeBanco = blocoN270.substring(53, 14)
  var agencia = blocoN270.substring(67, 4)
  var cidadeAgencia = blocoN270.substring(71, 30)
  var ufagencia = blocoN270.substring(101, 2)
  var reservadoSerasa = blocoN270.substring(103, 10)
  var reservado = blocoN270.substring(113, 3)
}

if (subtipo === '90') {
  var totalOcorrencias = blocoN270.substring(7, 5)
  var dataOcorrenciaMaisAntiga = blocoN270.substring(12, 8)
  var dataOcorrenciaMaisRecente = blocoN270.substring(20, 8)
  if (dataOcorrenciaMaisRecente) {
    var numeroBanco = blocoN270.substring(28, 3)
    var agencia = blocoN270.substring(31, 4)
    var nomeFantasiaBanco = blocoN270.substring(35, 12)
    var reservado = blocoN270.substring(47, 69)
  }
}

if (subtipo === '99') {
  var msg = blocoN270.substring(7, 40)
  var reservado = blocoN270.substring(47, 69)
}

module.exports = {
  msg,
  subtipo,
  dataOcorrencia,
  reservado,
  valor,
  totalOcorrencias,
  dataOcorrenciaMaisAntiga,
  dataOcorrenciaMaisRecente,
  reservadoSerasa,
  numCheque,
  nomeBanco,
  alineaCheque,
  qdadeCCF,
  numeroBanco,
  agencia,
  cidadeAgencia,
  ufagencia,
  nomeFantasiaBanco
}
