const errorRepository = require('../data/repositories/errorRepository')
const httpResponse = require('./httpResponse')

const handleAsync = async (expressResponse, origin, controllerName, requestBody, response, exception) => {
  const entity = {
    origin: origin,
    controller: controllerName,
    when: Date.now(),
    request: requestBody ? JSON.stringify(requestBody) : null,
    response: response ? JSON.stringify(response) : null,
    exception: exception
  }
  await errorRepository.create(entity)
  httpResponse.replyBadRequest(expressResponse, exception)

  console.error('An error happend, please check the logs!')
  console.error(exception)
}

module.exports = {
  handleAsync
}
