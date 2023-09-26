/* eslint-disable no-redeclare */
/* eslint-disable no-unused-expressions */
const { resultserasa } = require('../serasaService')
const { situacaoCnpj } = require('../../enums/situacaoCnpj')

const consultaN200 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN200.IndexOf('N200')

var blocoN200 = consultaN200.substring(indexBloco, tamanhoBloco)

var subtipo = blocoN200.substring(5, 2)
if (subtipo === '00') {
  var nomeRazao = blocoN200.substring(7, 70)
  var dataNascFundacao = blocoN200.substring(77, 8)

  var situacaoDocumento = blocoN200.substring(85, 2)
  switch (situacaoDocumento) {
    case '0': situacaoCnpj[0]
      break
    case '2': situacaoCnpj[2]
      break
    case '4': situacaoCnpj[4]
      break
    case '6': situacaoCnpj[6]
      break
    case '7': situacaoCnpj[7]
      break
    default: 'Situação do cpf não encontrada'
      break
  }

  var dataSituacaoDoc = blocoN200.substring(87, 8)
  var ccfIndisp = blocoN200.substring(95, 1)
  var reservado = blocoN200.substring(96, 20)
}

if (subtipo === '01') {
  var nomeDaMae = blocoN200.substring(7, 40)
  var reservado = blocoN200.substring(47, 69)
}

module.exports = { subtipo, nomeRazao, dataNascFundacao, situacaoDocumento, dataSituacaoDoc, ccfIndisp, reservado, nomeDaMae }
