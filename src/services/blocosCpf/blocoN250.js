/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */
/* Bloco protestos nacionais */

const { resultserasa } = require('../serasaService')

const consultaN250 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN250.IndexOf('N250')

var blocoN250 = consultaN250.substring(indexBloco, tamanhoBloco)

var subtipo = blocoN250.substring(5, 2)
if (subtipo === '00') {
  var dataOcorrencia = blocoN250.substring(7, 8)
  var tipoMoeda = blocoN250.substring(15, 3)
  var valor = blocoN250.substring(18, 15)
  var cartorio = blocoN250.substring(33, 2)
  var origemCidade = blocoN250.substring(35, 30)
  var origemUF = blocoN250.substring(65, 2)
  var reservado = blocoN250.substring(67, 49)
}

if (subtipo === '01') {
  var subjudice = blocoN250.substring(7, 1)
  var msgSubjudice = blocoN250.substring(8, 76)
  var tipoAnotacao = blocoN250.substring(84, 1)
  if (tipoAnotacao === 'A') {
    tipoAnotacao = 'Protesto'
  }
  var reservadoSerasa = blocoN250.substring(85, 10)
  var reservado = blocoN250.substring(95, 21)
}

if (subtipo === '90') {
  var totalOcorrencias = blocoN250.substring(7, 5)
  var dataOcorrenciaMaisAntiga = blocoN250.substring(12, 6)
  var dataOcorrenciaMaisRecente = blocoN250.substring(18, 6)
  var moeda = blocoN250.substring(24, 3)
  var valorTotal = blocoN250.substring(27, 15)
  var reservado = blocoN250.substring(42, 74)
}

if (subtipo === '99') {
  var msg = blocoN250.substring(7, 40)
  var reservado = blocoN250.substring(47, 69)
}

module.exports = {
  msg,
  subtipo,
  dataOcorrencia,
  reservado,
  moeda,
  tipoMoeda,
  valor,
  totalOcorrencias,
  dataOcorrenciaMaisAntiga,
  dataOcorrenciaMaisRecente,
  valorTotal,
  subjudice,
  msgSubjudice,
  tipoAnotacao,
  reservadoSerasa,
  cartorio,
  origemCidade,
  origemUF
}
