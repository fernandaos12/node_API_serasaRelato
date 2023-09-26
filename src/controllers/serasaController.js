const express = require('express')
const exceptionHandler = require('../helpers/exceptionHandler')
const serasaService = require('../services/serasaService')

const router = express.Router()

const controllerName = 'serasa'

/**
* @api {get} /client/consultaserasa/:documento Endpoint consulta serasa 
* @apiVersion 1.0.0
* @apiName Get
* @apiGroup Api integração Serasa
* @apiPermission authenticated user
* @apiParam {String} /:documento parâmetro de consulta por cpf ou cnpj
*/

router.get(`/${controllerName}/consulta/:documento`, async (req, res) => {
  
  try {
    
    const documento = req.params.documento;
    
    const cpf = documento.length == 11;
    
    if(cpf)
    {
      const retorno =  await serasaService.ConsultaCpf(documento);    
      return res.json(retorno.data);          
    }
    else{
      const retorno = await serasaService.ConsultaCnpj(documento);    
      return res.json(response.data);   
    }
    
  } catch (err) {
    console.log(err);
  }
})


/*
router.get(`/${controllerName}/cnpj/:cnpj`, async (req, res) => {
  
  try {
    const cnpj = req.params.cnpj
    const response = await clientService.sendZohoResultSerasaFromMongoByCnpj(cnpj)
    return res.status(200).send(response)
  } catch (err) {
    console.log(err);
  }
})*/

module.exports = router
