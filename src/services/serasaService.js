const managerCpf = require('../managers/cpfManager')
const managerCnpj = require('../managers/cnpjManager')
const httpSerasa = require('../helpers/httpSerasa')


const ConsultaCpf = async (cpf) => {
  
  const retornoConsulta = await httpSerasa.getSerasaCpf(cpf);
  
  if(retornoConsulta)
  {
    await managerCpf.GravarConsulta(retornoConsulta)  //gravando string da consulta no bd
  }
  else
  {
    console.error();
  }
}

const resultgravarConsultaCnpj = async (cnpj) => {
  
  const retornoConsultaCnpj = await httpSerasa.getSerasaCnpj(cnpj);
  
  if (retornoConsultaCnpj) {

    await managerCnpj.gravarConsultaCnpj(retornoConsultaCnpj);  // gravando string da consulta no bd

  } 
  else
  {
    console.error();
  }
}


module.exports = {
  ConsultaCpf,
  ConsultaCnpj
}
