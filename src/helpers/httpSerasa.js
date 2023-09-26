const configurationManager = require('../managers/configurationManager')
const axios = require('axios')

/** Request consulta cpf */

const getSerasaCpf = async (cpf) => {
  
  const baseUrl = configurationManager.getSerasaUrl()
  const userId = configurationManager.getSerasaUserId()
  const password = configurationManager.getSerasaPassword()
  const passwordAux = "        "; //senha auxiliar são 8 caracteres vazios fixos
  const layoutBase = 'B49C      0000'; 
  // layoutSerasa HardCode para testes, pode ser substituido pela variavel de configuração vinda do usuario
  const layoutSerasa = 'FC     FI0001000000000000000N99SINIAN                                            N                       S                                                                                                                                                                                                                                                                             P002RE02                     REHMHSPN                                                                              N00100PPBPCBN0                                                                                                     N00300                     SPRXPS                                                                                  T999';
  
  let url = baseUrl + userId + password + passwordAux + layoutBase + cpf + layoutSerasa;
  
  const config = {
    headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  }

  try 
  {
    const result = await axios.post(url, config)
    return result

  }
  catch (error) 
  {
    console.error(error)
  }
}

/* Request consulta cnpj */

const getSerasaCnpj = async (cnpj) => {
  
  const baseUrl = configurationManager.getSerasaUrl()
  const userId = configurationManager.getSerasaUserId()
  const password = configurationManager.getSerasaPassword()
  const passwordAux = "        "; //senha auxiliar são 8 caracteres vazios fixos
  const layoutBase = 'B49C      0'; 
  // layoutSerasa HardCode para testes, pode ser substituido pela variavel de configuração vinda do usuario
  const layoutSerasa = 'FC     FI0000000000000000000N99SINIAS                                          00S        000000000000000S         19900000000000000000000000000000000 000000000000000                                                                                                                                                                                                                 P006SSSSS  99SSSSSSSS SSSSS                                                                                        T999                                                                                                               ';
  
  let url = baseUrl + userId + password + passwordAux + layoutBase + cnpj + layoutSerasa;
  
  const config = {
    headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  }

  try 
  {
    const result = await axios.post(url, config)
    return result

  }
  catch (error) 
  {
    console.error(error)
  }
}


module.exports = {
  getSerasaCpf,
  getSerasaCnpj
}
