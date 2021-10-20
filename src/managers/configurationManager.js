const config = require('config')

const getMongoUrl = () => {
 const mongodbUrl = config.get('database.mongoUrl')
 
  if (!mongodbUrl) {
    throw new Error('The mongo url was not found on config.')
  }

  return mongodbUrl
}

const getSerasaUrl = () => {
  const serasaUrl = config.get('serasa.baseUrl')

  if (!serasaUrl) {
    throw new Error('The userId of serasa was not found on config.')
  }

  return serasaUrl
}

const getSerasaUserId = () => {
  const userId = config.get('serasa.userId')

  if (!userId) {
    throw new Error('The userId of serasa was not found on config.')
  }

  return userId
}

const getSerasaPassword = () => {
  const password = config.get('serasa.password')

  if (!password) {
    throw new Error('The userId of serasa was not found on config.')
  }

  return password
}


const getZohoUrl = () => {
  const baseUrl = config.get('baseUrls.zoho')

  if (!baseUrl) {
    throw new Error('The base url of zoho was not found on config.')
  }

  return baseUrl
}

const getZohoToken = () => {
  const token = config.get('credentials.zoho.integrationToken')

  if (!token) {
    throw new Error('The token of zoho was not found on config.')
  }

  return token
}

const getZohoClientConfiguration = () => {
  const clientId = config.get('credentials.zoho.clientId')

  if (!clientId) {
    throw new Error('The client id was not found on config.')
  }

  const clientSecret = config.get('credentials.zoho.clientSecret')

  if (!clientSecret) {
    throw new Error('The client secret was not found on config.')
  }

  const redirectUrl = config.get('credentials.zoho.redirectUrl')

  if (!redirectUrl) {
    throw new Error('The redirect url was not found on config.')
  }

  const userIdentifier = config.get('credentials.zoho.userIdentifier')

  if (!userIdentifier) {
    throw new Error('The user identifier was not found on config.')
  }

  const tokenManagement = config.get('credentials.zoho.tokenManagement')

  if (!tokenManagement) {
    throw new Error('The token management was not found on config.')
  }

  const grantToken = config.get('credentials.zoho.grantToken')

  if (!grantToken) {
    throw new Error('The grant token was not found on config.')
  }

  return {
    client_id: clientId,
    client_secret: clientSecret,
    mysql_module: tokenManagement,
    redirect_url: redirectUrl,
    user_identifier: userIdentifier,
    grant_token: grantToken
  }
}

module.exports = {
  getMongoUrl,
  getSerasaUrl,
  getSerasaUserId,
  getSerasaPassword,
  getZohoUrl,
  getZohoToken,
  getZohoClientConfiguration
}
