const cnpjRepository = require('../data/repositories/cnpjRepository');

const saveAllCnpj = async () => {
    const saveCnpj = await cnpjRepository.create()
    return saveCnpj
}


const getByCnpj = async(cnpj)=>{
    const resultCnpj = await cnpjRepository.find({cnpj: cnpj})
    return resultCnpj
}

module.exports = {
    getByCnpj,
    saveAllCnpj
}