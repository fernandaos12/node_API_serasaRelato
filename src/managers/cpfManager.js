const cpfRepository = require('../data/repositories/cpfRepository')
const dados = require('../services/inserirCpf')

/*const saveAllCpf= async () => {    
    const saveCpf = await cpfRepository.modelCpf.create() 
    return saveCpf
}*/

async function saveAllCpf(req, res){

    try {
    const inserirCpf = await cpfRepository.modelCpf.create({

      nome: dados.nome,
      cpf: dados.cpf,
      data_nascimento: dados.data_nascimento,
      nome_mae: dados.nome_mae,
      sexo: dados.sexo,
      nomes_homonimos: dados.nomes_homonimos,
      dependentes:dados.dependentes,
      status: dados.status,
      
      endereco: dados.endereco,
      bairro: dados.bairro,
      cidade: dados.cidade,
      estado: dados.estado,
      tel_comercial: dados.tel_comercial,
      tel_residencial: dados.tel_residencial,
      enderecoComercial: dados.enderecoComercial,
 
      pendencias_comerciais: dados.pendencias_comerciais,
      pendencias_bancarias: dados.pendencias_bancarias,
      cheque_fundo: dados.cheque_fundo,
      protestos: dados.protestos,
      acoes_juridicas: dados.acoes_juridicas,
      falencias: dados.falencias,
      dividas_vencidas: dados.dividas_vencidas,
   
      data_divida: dados.data_divida,
      segmento_divida: dados.segmento_divida,
  
      empresa_credora: dados.empresa_credora,
      cnpj_empresa_credora: dados.cnpj_empresa_credora,
      uf_empresa_credora: dados.empresa_credora,
      data_insercao_dados_pela_empresa: dados.data_insercao_dados_pela_empresa,
      score: dados.score,
      chance_pagamento: dados.chance_pagamento,

    })

    return inserirCpf

} catch (err) {
    return err
}

saveAllCpf()

const getByCpf = async (cpf) => {
    const requestResult = await cpfRepository.modelCpf.find({ cpf: cpf })
    return requestResult
}

module.exports = {
    getByCpf,
    saveAllCpf,
}