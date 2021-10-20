const httpClient = require('./httpNote')
const configurationManager = require('../managers/configurationManager')
const zohoPartialGetAccountsEndpoint = 'crm/v2/Accounts'
const zohoPartialGetProductsEndpoint = 'crm/v2/Products'

const postZohoEntityNotesErrors = async (idZoho, resultXml, controllerName) => {
  if (controllerName === 'products') {
    const resultMessenger = 'de Criação de Produtos no Protheus'
    const data = await generateZohoClientJson(resultXml, resultMessenger)
    const baseUrl = configurationManager.getZohoUrl()
    await httpClient.sendZohoPostAsync(baseUrl + zohoPartialGetProductsEndpoint + '/' + idZoho + '/Notes', data)

  } else if (controllerName === 'client') {
    const resultMessenger = 'de Criação de Cliente no Protheus'
    const data = await generateZohoClientJson(resultXml, resultMessenger)
    const baseUrl = configurationManager.getZohoUrl()
    await httpClient.sendZohoPostAsync(baseUrl + zohoPartialGetAccountsEndpoint + '/' + idZoho + '/Notes', data)

  } else if (controllerName === 'ClientUpdate') {
    const resultMessenger = 'de Atualização de cliente'
    const data = await generateZohoClientJson(resultXml, resultMessenger)
    const baseUrl = configurationManager.getZohoUrl()
    await httpClient.sendZohoPostAsync(baseUrl + zohoPartialGetAccountsEndpoint + '/' + idZoho + '/Notes', data)

  } else if (controllerName === 'standard') {
    const resultMessenger = 'ao enviar requisição'
    const data = await generateZohoClientJson(resultXml, resultMessenger)
    const baseUrl = configurationManager.getZohoUrl()
    await httpClient.sendZohoPostAsync(baseUrl + zohoPartialGetAccountsEndpoint + '/' + idZoho + '/Notes', data)

  } else if (controllerName === 'standardProducts') {
    const resultMessenger = 'ao enviar requisição'
    const data = await generateZohoClientJson(resultXml, resultMessenger)
    const baseUrl = configurationManager.getZohoUrl()
    await httpClient.sendZohoPostAsync(baseUrl + zohoPartialGetProductsEndpoint + '/' + idZoho + '/Notes', data)
    
  }
}

const generateZohoClientJson = async (resultXml, resultMessenger) => {
  const data = {
    Note_Title: 'Erro ' + resultMessenger,
    Note_Content: 'Mensagem de Erro: ' + resultXml
  }

  return {
    data: JSON.stringify({
      data: [data]
    })
  }
}

module.exports = {
  postZohoEntityNotesErrors
}
