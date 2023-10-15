/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */

/*
Falências / Concordatas – Reg N470
Subtipo 00 – Detalhe das Falências e Concordatas
Subtipo 90 – Resumo das Falências e Concordatas
Subtipo 99 – Caso não existam ocorrências
*/

const { resultserasa } = require('../serasaService')

const consultaN470 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN470.indexOf('N470')

if (indexBloco !== -1) {
  var blocoN470 = consultaN470.substring(indexBloco, tamanhoBloco)

  var subtipo = blocoN470.substring(5, 2)

  // detalhe das ações judiciais
  if (subtipo === '00') {
    var dataOcorrencia = blocoN470.substring(7, 8)
    var codNatureza = blocoN470.substring(15, 2)
    var numeroVaraCivel = blocoN470.substring(17, 4)
    var pracaLocalidade = blocoN470.substring(21, 4)
    var siglaUF = blocoN470.substring(25, 2)
    var cidade = blocoN470.substring(27, 30)
    var filial = blocoN470.substring(57, 4)
    var digitoVerifDocumento = blocoN470.substring(61, 2)
    var dataInclusaoAnotacao = blocoN470.substring(71, 6)
    var reservado = blocoN470.substring(77, 10)
    var descricaoNatureza = blocoN470.substring(87, 29)
  }

  if (subtipo === '01') { // detalhe das ações judiciais
    var descricaoNatureza = blocoN470.substring(7, 30)
    var codNatureza = blocoN470.substring(37, 79)
  }

  if (subtipo === '90') { //
    var dataInicial = blocoN470.substring(7, 8)
    var dataFinal = blocoN470.substring(15, 8)
    var quantidadeTotal = blocoN470.substring(23, 9)
    var valorTotal = blocoN470.substring(32, 15)
    var reservado = blocoN470.substring(47, 9)
  }

  if (subtipo === '99') {
    var msg = blocoN470.substring(7, 70)
    var reservado = blocoN470.substring(77, 39)
  }
}

module.exports = {
  dataInicial,
  dataFinal,
  quantidadeTotal,
  valorTotal,
  descricaoNatureza,
  codNatureza,
  dataOcorrencia,
  numeroVaraCivel,
  pracaLocalidade,
  siglaUF,
  cidade,
  filial,
  digitoVerifDocumento,
  dataInclusaoAnotacao,
  msg,
  subtipo,
  reservado

}
