const express = require('express')
const exceptionHandler = require('../helpers/exceptionHandler')
const serasaService = require('../services/serasaService')

const router = express.Router()

const controllerName = 'serasa'

/**
    * @api {get} /client/cpf/:cpf Get User cpf information and Date of Registration.
    * @apiVersion 1.0.0
    * @apiName Get
    * @apiGroup Api integration Serasa
    * @apiPermission authenticated user
    * @apiParam {String} /:cpf Search results from cpf
    */

  router.get(`/${controllerName}/cpf/:cpf`, async (req, res) => {

    try {
      
      const cpf = req.params.cpf
      const response = await serasaService.searchCPF(cpf)
      if(response.status == 200){
        return res.status(200).send(response.data)
      }
      return res.status(202).json(response)
    } catch (err) {
      console.log(err);
    }
  })

/**
    * @api {get} /client/cnpj/:cnpj Get User cpf information and Date of Registration.
    * @apiVersion 1.0.0
    * @apiName Get
    * @apiGroup Api integration Serasa
    * @apiPermission authenticated user
    * @apiParam {String} :cnpj Search results from cnpj
    */

router.get(`/${controllerName}/cnpj/:cnpj`, async (req, res) => {

  try {
    const cnpj = req.params.cnpj
    const response = await clientService.sendZohoResultSerasaFromMongoByCnpj(cnpj)
    return res.status(200).send(response)
  } catch (err) {
    console.log(err);
  }
})

module.exports = router
