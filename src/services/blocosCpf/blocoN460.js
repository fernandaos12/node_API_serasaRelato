/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */

/*
Ações Judiciais – Reg N460
Subtipo 00 – Detalhe das Ações Judiciais
Subtipo 01– Detalhe das Ações Judiciais
Subtipo 02 – Detalhe das Ações Judiciais Subjudice
 Formatado apenas quando seq. 12 do subtipo 01 = “S”
Subtipo 90 – Resumo das Ações Judiciais
Subtipo 99 – Caso não existam ocorrências
*/

const { resultserasa } = require('../serasaService')

const consultaN460 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN460.indexOf('N460')

if (indexBloco !== -1) {
  var blocoN460 = consultaN460.substring(indexBloco, tamanhoBloco)

  var subtipo = blocoN460.substring(5, 2)

  // detalhe das ações judiciais
  if (subtipo === '00') {
    var dataOcorrencia = blocoN460.substring(7, 8)
    var numeroVaraCivel = blocoN460.substring(15, 4)
    var numeroDistribuidor = blocoN460.substring(19, 3)
    var codNatureza = blocoN460.substring(23, 3)
    var valorAcao = blocoN460.substring(26, 15)
    var codPraca = blocoN460.substring(41, 4)
    var siglaUF = blocoN460.substring(45, 2)
    var cidade = blocoN460.substring(47, 30)
    var principal = blocoN460.substring(77, 1)
    var subJudice = blocoN460.substring(78, 1)
    var filial = blocoN460.substring(79, 4)
    var digitoVerifDocumento = blocoN460.substring(83, 2)
    var dataInclusaoAnotacao = blocoN460.substring(85, 8)
    var horaInclusaoAnotacao = blocoN460.substring(93, 6)
    var reservado = blocoN460.substring(99, 10)
  }

  if (subtipo === '01') { // detalhe das ações judiciais
    var descricaoNatureza = blocoN460.substring(7, 30)
    var codNatureza = blocoN460.substring(37, 79)
  }

  if (subtipo === '02') { // detalhes das ações judiciais subjudice
    var praca = blocoN460.substring(7, 4)
    var distribuidor = blocoN460.substring(11, 2)
    var vara = blocoN460.substring(13, 2)
    var data = blocoN460.substring(15, 8)
    var processo = blocoN460.substring(23, 16)
    var mensagem = blocoN460.substring(39, 77)
  }

  if (subtipo === '90') { //
    var dataInicial = blocoN460.substring(7, 8)
    var dataFinal = blocoN460.substring(15, 8)
    var quantidadeTotal = blocoN460.substring(23, 9)
    var valorTotal = blocoN460.substring(32, 15)
    var reservado = blocoN460.substring(47, 9)
  }

  if (subtipo === '99') {
    var msg = blocoN460.substring(7, 70)
    var reservado = blocoN460.substring(77, 39)
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
  numeroDistribuidor,
  valorAcao,
  codPraca,
  siglaUF,
  cidade,
  principal,
  subJudice,
  filial,
  digitoVerifDocumento,
  dataInclusaoAnotacao,
  horaInclusaoAnotacao,
  praca,
  distribuidor,
  vara,
  data,
  processo,
  mensagem,
  msg,
  subtipo,
  reservado

}
