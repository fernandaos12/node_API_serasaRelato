/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */

/*
Para consultar a feature SCORE POSITIVO PJ REHJ,
solicitar via P002 o código da transação REHM
*/

const { resultserasa } = require('../serasaService')

const consultaF900 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaF900.indexOf('F900')

if (indexBloco !== -1) {
  var blocoF900 = consultaF900.substring(indexBloco, tamanhoBloco)

  var tipo = blocoF900.substring(5, 4)
  var score = blocoF900.substring(9, 6)
  var range = blocoF900.substring(15, 6)
  var taxa = blocoF900.substring(21, 5)
  var mensagem = blocoF900.substring(26, 49)
  var codMensagem = blocoF900.substring(75, 6)
  var reservado = blocoF900.substring(81, 35)
}

module.exports = {
  tipo,
  score,
  range,
  taxa,
  codMensagem,
  mensagem,
  reservado

}
