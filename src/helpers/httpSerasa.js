const configurationManager = require('../managers/configurationManager')
const passwordManager = require('../managers/passwordManager')
const serasaHelper = require('../helpers/serasaHelper')
const axios = require('axios')


const getSerasaCpfCnpjAsync = async (cpfOrCnpj) => {

  const baseUrl = configurationManager.getSerasaUrl()
  const userId = configurationManager.getSerasaUserId()
  const password = configurationManager.getSerasaPassword()
                    
  let url = baseUrl + userId + password + "        " + 'B49C      0000' + cpfOrCnpj + 'FC     FI0000000000000000000N99SINIAS                                          00S        000000000000000S         19900000000000000000000000000000000 000000000000000                                                                                                                                                                                                                 P006SSSSS  99SSSSSSSS SSSSS                                                                                        T999                                                                                                               '
  //let url = baseUrl + userId + password + "        " + "B49C      0"+cpfOrCnpj+"JC     FI0000000            N99SINIAN                                000000000000         000000000000000          0000      0000000000000000                         00                    000000000000                                                                000000000000000                 0                                0000000000000000000000000000000000000000000   P002IP20QPR                                                                                                        T999                                                                                         "

  const config = {
    headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  }
  try {
    const result = await axios.post(url, config)
    return result
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getSerasaCpfCnpjAsync
}
