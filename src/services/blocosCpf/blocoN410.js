/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */
/* Bloco endereço do cep */

const { resultserasa } = require('../serasaService')

const consultaN410 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN410.indexOf('N410')

if (indexBloco !== -1) {
  var blocoN410 = consultaN410.substring(indexBloco, tamanhoBloco)

  var subtipo = blocoN410.substring(5, 2)
  if (subtipo === '00') {
    var enderecoCep = blocoN410.substring(7, 70)
    var bairro = blocoN410.substring(77, 30)
    var reservado = blocoN410.substring(113, 3)
  }

  if (subtipo === '01') {
    var cidade = blocoN410.substring(7, 30)
    var uf = blocoN410.substring(37, 2)
    var cepGenerico = blocoN410.substring(39, 1)
    var reservado = blocoN410.substring(40, 76)
  }

  if (subtipo === '99') {
    var msg = blocoN410.substring(7, 40)
    var reservado = blocoN410.substring(47, 69)
  }
} else {
  console.log('sem dados ')
}

module.exports = {
  msg,
  subtipo,
  enderecoCep,
  reservado,
  bairro,
  cidade,
  uf,
  cepGenerico
}
