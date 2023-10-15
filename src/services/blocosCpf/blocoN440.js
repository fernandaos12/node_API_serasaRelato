/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */

/*
Consultas à Serasa – Reg N440
Subtipo 00 – Consultas de cheques - Interno
Subtipo 01 – Consultas de cheques - Mercado
Subtipo 02 – Consultas – Referência Comercial
Subtipo 03 – Consultas sem cheques
*/

const { resultserasa } = require('../serasaService')

const consultaN440 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN440.indexOf('N440')

if (indexBloco !== -1) {
  var blocoN440 = consultaN440.substring(indexBloco, tamanhoBloco)

  var subtipo = blocoN440.substring(5, 2)

  // consultas à serasa efetuadas no proprio estabelecimento
  if (subtipo === '00') {
    var dataEmissaoPrimeiroChequeAvista = blocoN440.substring(7, 4)
    var dataEmissaoUltimoChequeAVista = blocoN440.substring(11, 4)
    var totalChequesEmitidosAvistaUltimos15Dias = blocoN440.substring(15, 3)
    var totalChequesAprazoUltimos30Dias = blocoN440.substring(18, 2)
    var totalChequesPrazoEntre31e60dias = blocoN440.substring(20, 2)
    var totalChequesPrazoUltimos61e90dias = blocoN440.substring(22, 2)
    var totalChequesPrazoEmitidos = blocoN440.substring(24, 3)
    var reservado = blocoN440.substring(27, 89)
  }

  if (subtipo === '01') { // consultas a serasa efetuadas em outros estabelecimentos
    var dataEmissaoPrimeiroChequeAvista = blocoN440.substring(7, 4)
    var dataEmissaoUltimoChequeAVista = blocoN440.substring(11, 4)
    var totalChequesEmitidosAvistaUltimos15Dias = blocoN440.substring(15, 3)
    var totalChequesAprazoUltimos30Dias = blocoN440.substring(18, 2)
    var totalChequesPrazoEntre31e60dias = blocoN440.substring(20, 2)
    var totalChequesPrazoUltimos61e90dias = blocoN440.substring(22, 2)
    var totalChequesPrazoEmitidos = blocoN440.substring(24, 3)
    var reservado = blocoN440.substring(27, 89)
  }

  if (subtipo === '02') { // referencia comercial
    var primeiroRecenteNome = blocoN440.substring(7, 25)
    var primeiroRecenteData = blocoN440.substring(32, 4)
    var segundoRecenteNome = blocoN440.substring(36, 25)
    var segundoRecenteData = blocoN440.substring(61, 4)
    var terceiroRecenteNome = blocoN440.substring(65, 25)
    var terceiroRecenteData = blocoN440.substring(90, 4)
    var reservado = blocoN440.substring(94, 22)
  }

  if (subtipo === '99') {
    var msg = blocoN440.substring(7, 40)
    var reservado = blocoN440.substring(47, 69)
  }
}

module.exports = {
  dataEmissaoPrimeiroChequeAvista,
  dataEmissaoUltimoChequeAVista,
  totalChequesEmitidosAvistaUltimos15Dias,
  totalChequesAprazoUltimos30Dias,
  totalChequesPrazoEntre31e60dias,
  totalChequesPrazoUltimos61e90dias,
  totalChequesPrazoEmitidos,
  primeiroRecenteNome,
  primeiroRecenteData,
  segundoRecenteNome,
  segundoRecenteData,
  terceiroRecenteNome,
  terceiroRecenteData,
  msg,
  subtipo,
  reservado

}
