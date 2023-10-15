/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */

/*
Bloco - Últimos Telefones Consultados – Reg N430
Subtipo 00 – Últimos telefones consultados
Subtipo 99 – Caso não existam últimos telefones consultados, retornará somente este registro com a mensagem
explicativa.
*/

const { resultserasa } = require('../serasaService')

const consultaN430 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN430.indexOf('N430')

if (indexBloco !== -1) {
  var blocoN430 = consultaN430.substring(indexBloco, tamanhoBloco)

  var subtipo = blocoN430.substring(5, 2)

  if (subtipo === '00') {
    var dddtelefone1 = blocoN430.substring(7, 3)
    var telefone1 = blocoN430.substring(10, 8)
    var dddtelefone2 = blocoN430.substring(18, 3)
    var telefone2 = blocoN430.substring(21, 8)
    var dddtelefone3 = blocoN430.substring(29, 3)
    var telefone3 = blocoN430.substring(32, 8)
    var dddtelefone4 = blocoN430.substring(40, 3)
    var telefone4 = blocoN430.substring(43, 8)
    var dddtelefone5 = blocoN430.substring(51, 3)
    var telefone5 = blocoN430.substring(54, 8)
    var reservado = blocoN430.substring(62, 54)
  }

  if (subtipo === '99') {
    var msg = blocoN430.substring(7, 40)
    var reservado = blocoN430.substring(47, 69)
  }
}

module.exports = {
  dddtelefone1,
  telefone1,
  dddtelefone2,
  telefone2,
  dddtelefone3,
  telefone3,
  dddtelefone4,
  telefone4,
  dddtelefone5,
  telefone5,
  msg,
  subtipo,
  reservado

}
