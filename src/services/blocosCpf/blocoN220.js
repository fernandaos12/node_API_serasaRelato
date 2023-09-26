
/* Bloco nada consta */
/*
ocorrerá sempre que o documento / cheque consultado não possuir qualquer restrição ou tipo de anotação, e somente quando o campo 07 do registro N001, subtipo 00 informar “S”. */

const { resultserasa } = require('../serasaService')

const consultaN220 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN220.IndexOf('N220')

var blocoN220 = consultaN220.substring(indexBloco, tamanhoBloco)

var subtipo = blocoN220.substring(5, 2)
if (subtipo === '00') {
  var msgNadaConsta = blocoN220.substring(7, 40)
  var reservado = blocoN220.substring(47, 69)
}

module.exports = {
  msgNadaConsta,
  reservado
}
