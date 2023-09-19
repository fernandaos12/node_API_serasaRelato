const dadosRepository = require('../data/repositories/dadosRepository')
const dados = require('../services/dadosCpf')
const{ resultserasa } = require('../services/serasaService');


async function GravarConsulta(req, res){
    
    try {
        await dadosRepository.modelSerasaData.create({
            
            dataCriacao: Date.now,      
            dados: resultserasa
        })
    } 
    catch (err) 
    {
        return err
    }
}

GravarConsulta()

const getByCpf = async (cpf) => {
    const requestResult = await cpfRepository.modelCpf.find({ cpf: cpf })
    return requestResult
}

module.exports = {
    getByCpf,
    GravarConsulta
}
