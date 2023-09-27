/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */
/* Bloco endereco do telefone */

/*
Subtipo 00 – Confirmação de Assinante
Subtipo 01 – Endereço do Telefone
Subtipo 02 – Complemento endereço
Subtipo 99 – Mensagem relativa ao Teleconfirma.
*/

const { resultserasa } = require('../serasaService')

const consultaN420 = resultserasa

const tamanhoBloco = 115
const indexBloco = consultaN420.indexOf('N420')

if (indexBloco !== -1) {
  var blocoN420 = consultaN420.substring(indexBloco, tamanhoBloco)

  var subtipo = blocoN420.substring(5, 2)
  if (subtipo === '00') {
    var docAssinanteTelefone = blocoN420.substring(7, 1)
    var nomeAssinante = blocoN420.substring(8, 70)
    var tipoDocAssinante = blocoN420.substring(78, 1)
    switch (tipoDocAssinante) {
      case 'I': tipoDocAssinante = 'Indefinido'
        break
      case 'F': tipoDocAssinante = 'Física'
        break
      case 'J': tipoDocAssinante = 'Jurídica'
        break
      default: 'Nenhum documento'
        break
    }
    var classeAssinante = blocoN420.substring(79, 1)
    switch (classeAssinante) {
      case '0': tipoDocAssinante = 'Não definida'
        break
      case '1': tipoDocAssinante = 'Residencial'
        break
      case '2': tipoDocAssinante = 'Comercial'
        break
      default: 'Nenhum documento'
        break
    }
    var dataInstalacaoLinhaTel = blocoN420.substring(80, 8)
    var reservado = blocoN420.substring(88, 28)
  }

  if (subtipo === '01') {
    var logradouroAssinante = blocoN420.substring(7, 70)
    var bairroAssinante = blocoN420.substring(77, 30)
    var reservado = blocoN420.substring(107, 9)
  }

  if (subtipo === '02') {
    var cidadeAssinante = blocoN420.substring(7, 30)
    var cepAssinante = blocoN420.substring(37, 8)
    var reservado = blocoN420.substring(45, 71)
  }

  if (subtipo === '99') {
    var indicadorPesquisa = blocoN420.substring(7, 1)
    switch (indicadorPesquisa) {
      case '1': indicadorPesquisa = 'DDD/Telefone não encontrado'
        break
      case '2': indicadorPesquisa = 'Confirmação de telefone não disponível no momento'
        break
      case '3': indicadorPesquisa = 'Telefone público, celular ou outra concessionária'
        break
      case '4': indicadorPesquisa = 'Pesquisa de telefone não autorizada'
        break
      case '5': indicadorPesquisa = 'Telefone não autorizado para divulgação'
        break
      default: 'Não consta dados'
        break
    }
    var msg = blocoN420.substring(8, 40)
    var reservado = blocoN420.substring(48, 68)
  }
} else {
  console.log('sem dados ')
}

module.exports = {
  docAssinanteTelefone,
  nomeAssinante,
  classeAssinante,
  msg,
  subtipo,
  dataInstalacaoLinhaTel,
  logradouroAssinante,
  bairroAssinante,
  cidadeAssinante,
  cepAssinante,
  indicadorPesquisa,
  reservado

}
