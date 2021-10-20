const cpfRepository = require('../data/repositories/cpfRepository')
const Dados = require('../services/inserirCpf')

/*const saveAllCpf= async () => {    
    const saveCpf = await cpfRepository.modelCpf.create() 
    return saveCpf
}*/

async function saveAllCpf(req, res){
    const inserirCpf = await cpfRepository.modelCpf.create({

      nome: Dados.nome,
      cpf: Dados.cpf,
      data_nascimento: Dados.data_nascimento,
      nome_mae: Dados.nome_mae,
      sexo: Dados.sexo,
      nomes_homonimos: Dados.nomes_homonimos,
      status: Dados.status,
      
      endereco: Dados.endereco,
      bairro: Dados.bairro,
      cidade: Dados.cidade,
      estado: Dados.estado,
      tel_comercial: Dados.tel_comercial,

    })

    return inserirCpf
}
inserirCpf()

const getByCpf = async (cpf) => {
    const requestResult = await cpfRepository.modelCpf.find({ cpf: cpf })
    return requestResult
}

module.exports = {
    getByCpf,
    saveAllCpf,
}