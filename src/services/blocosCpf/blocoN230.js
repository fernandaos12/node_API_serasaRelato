/* eslint-disable no-redeclare */
/* eslint-disable no-unused-expressions */
/* Bloco pendencias internas */
/*
Subtipo 00 - Detalhe de Pendências Internas Este registro pode ocorrer até 10 vezes ou até a quantidade total informada no registro N230, subtipo 90 - campo de (seq 4).
Subtipo 90 - Total de Pendências Internas
Subtipo 99 - Caso não existam pendências financeiras, retornará somente este registro com a mensagem explicativa. */

const { resultserasa } = require('../serasaService')

const consultaN230 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN230.IndexOf('N230')

var blocoN230 = consultaN230.substring(indexBloco, tamanhoBloco)

var subtipo = blocoN230.substring(5, 2)
if (subtipo === '00') {
  var dataOcorrencia = blocoN230.substring(7, 8)
  var modalidade = blocoN230.substring(15, 30)
  var avalista = blocoN230.substring(45, 1)
  var tipoMoeda = blocoN230.substring(46, 3)
  var valor = blocoN230.substring(49, 15)
  var contrato = blocoN230.substring(64, 16)
  var origem = blocoN230.substring(80, 30)
  var siglaEmbratel = blocoN230.substring(110, 4)
  var reservado = blocoN230.substring(114, 2)
}

if (subtipo === '90') {
  var totalOcorrencias = blocoN230.substring(7, 5)
  var dataOcorrenciaMaisAntiga = blocoN230.substring(12, 6)
  var dataOcorrenciaMaisRecente = blocoN230.substring(18, 6)
  var valorTotalPendenciasInternas = blocoN230.substring(24, 15)
  var reservado = blocoN230.substring(39, 77)
}

if (subtipo === '99') {
  var msg = blocoN230.substring(7, 40)
  var reservado = blocoN230.substring(47, 69)
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
  valorTotalPendenciasInternas

}
