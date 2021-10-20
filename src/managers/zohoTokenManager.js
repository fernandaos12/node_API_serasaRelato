const oauthRepository = require('../data/repositories/oauthRepository')

const saveOAuthTokens = async (token) => {
  await deleteOAuthTokens(token)

  const entity = {
    useridentifier: token.user_identifier,
    accesstoken: token.access_token,
    refreshtoken: token.refresh_token,
    expirytime: token.expires_in
  }

  await oauthRepository.create(entity)
}

const updateOAuthTokens = async (token) => {
  await oauthRepository.findOneAndUpdate(
    {
      useridentifier: token.user_identifier
    },
    {
      accesstoken: token.access_token,
      expiresin: token.expires_in
    })
}

const getOAuthTokens = async (userIdentifier) => {
  const tokens = await oauthRepository.find({ useridentifier: userIdentifier })
  return tokens
}

const deleteOAuthTokens = async (token) => {
  await oauthRepository.findOneAndRemove({ useridentifier: token.user_identifier })
}

module.exports = {
  saveOAuthTokens,
  getOAuthTokens,
  updateOAuthTokens,
  deleteOAuthTokens
}
