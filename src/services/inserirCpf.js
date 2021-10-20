const{ resultserasa } = require('../services/serasaService');
   
     var dados = resultserasa

       var nome = () => {
        if (dados.indexOf('CB002')!=-1){
              var posicao = dados.substring(629,634);
              return posicao;              
            }
       }
       var cpf = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(11,27);
              return posicao;              
            }
       }
       var data_nascimento = () => {
        if (dados.indexOf('CB002')){ 
              var posicao = dados.substring(629,634);
              return posicao;              
            }
       }
       var nome_mae = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;              
            }
       }
       var sexo = async() => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;              
            }
       }
       var nomes_homonimos = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }
       var dependentes = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var escolaridade = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var estado_civil = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var status = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;            
            }
       }
       var endereco = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;            
            }
       }
       var bairro = () => {
        if (dados.indexOf('CB002')){
             var posicao = dados.substring(629,634);
              return posicao;              
            }
       }
       var cidade = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;              
            }
       }
       var estado = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;              
            }
       }
       var tel_comercial = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }    
       var tel_celular = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var tel_residencial = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var enderecoComercial = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var pendencias_comerciais = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var pendencias_bancarias = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var cheque_fundo = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var protestos = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var acoes_juridicas = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var falencias = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var dividas_vencidas = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var data_divida = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var segmento_divida = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var empresa_credora = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var cnpj_empresa_credora = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var uf_empresa_credora = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var data_insercao_dados_pela_empresa = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }    
       var escore = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }  
       var chance_pagamento = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,634);
              return posicao;             
            }
       }   

module.exports = {
    nome, cpf, nome_mae, sexo, nomes_homonimos, status, endereco, bairro, cidade, 
    estado, tel_comercial, tel_celular,tel_residencial, endereco,
    pendencias_comerciais,pendencias_bancarias, cheque_fundo,
    protestos, acoes_juridicas,falencias, dividas_vencidas, segmento_divida, empresa_credora, 
    cnpj_empresa_credora, enderecoComercial,
    data_insercao_dados_pela_empresa, uf_empresa_credora, data_divida, data_nascimento, 
    estado_civil, dependentes, escolaridade, escore, chance_pagamento
}

