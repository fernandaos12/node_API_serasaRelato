/*importara os blocos cpf formando o relatorio sintetico final */

/*const {blocoN001} = require('./services/blocoN001');*/

/* os blocos abaixo é para criar um arquivo com cada bloco onde sera tratado e depois importar pra ca e formar o relatorio final */

const { resultserasa } = require('./serasaService')
const dados = resultserasa

/*let B49C = dados.substring(0, 399)
let P006 = dados.substring(400, 514)*/
let B001 = dados.substring(515, 630)
let B002 = dados.substring(630, 745)
let B003 = dados.substring(745, 860)
let B004 = dados.substring(860, 975)
let B005 = dados.substring(975, 1090)
//let B006 = dados.substring(1090, 1205)


       var nome = () => {
        if (dados.indexOf('B001')!=-1){
              var posicao = B001.substring(4, 48)
              return posicao;              
            }
       }
       var cpf = () => {
        if (dados.indexOf('B001')){
              var posicao = B001.substring(49, 60)
              return posicao;              
            }
       }
       var data_nascimento = () => {
        if (dados.indexOf('B002')){ 
              var posicao = serasaHelper.formatDate(B001.substring(75, 83))
              return posicao;              
            }
       }
       var nome_mae = () => {
        if (dados.indexOf('B002')){
              var posicao = B002.substring(23, 68)
              return posicao;              
            }
       }
       var sexo = async() => {
        if (dados.indexOf('B002')){
              var posicao = genderEnum.genderFormater(B002.substring(68, 69))
              return posicao;              
            }
       }
       var nomes_homonimos = () => {
        if (dados.indexOf('B001')){
              var posicao = B001.substring(4, 48)
              return posicao;             
            }
       }
       var dependentes = () => {
        if (dados.indexOf('B003')){
              var posicao = B003.substring(17, 19)
              return posicao;             
            }
       }  
       var escolaridade = () => {
        if (dados.indexOf('B003')){
              var posicao = B003.substring(19, 31)
              return posicao;             
            }
       }  
       var estado_civil = () => {
        if (dados.indexOf('B003')){
              var posicao = B003.substring(5, 17)
              return posicao;             
            }
       }  
       var status = () => {
        if (dados.indexOf('B001')){
              var posicao = B001.substring(83, 87)
              return posicao;            
            }
       }
       var endereco = () => {
        if (dados.indexOf('B004')){
              var posicao = B004.substring(4, 49)
              return posicao;            
            }
       }
       var bairro = () => {
        if (dados.indexOf('B004')){
             var posicao = B004.substring(49, 69)
              return posicao;              
            }
       }
       var cidade = () => {
        if (dados.indexOf('B004')){
              var posicao = B004.substring(69, 94)
              return posicao;              
            }
       }
       var estado = () => {
        if (dados.indexOf('B004')){
              var posicao = B004.substring(94, 96)
              return posicao;              
            }
       }
       var tel_comercial = () => {
        if (dados.indexOf('B003')){
              var posicao = B003.substring(85, 93)
              return posicao;             
            }
       }    
       var tel_celular = () => {
        if (dados.indexOf('B003')){
              var posicao = B003.substring(105, 107)
              return posicao;             
            }
       }  
       var tel_residencial = () => {
        if (dados.indexOf('B003')){
              var posicao = B003.substring(73, 81)
              return posicao;             
            }
       }  
       var enderecoComercial = () => {
        if (dados.indexOf('B004')){
              var posicao = B004.substring(4, 49)
              return posicao;             
            }
       }  
       var pendencias_comerciais = () => {
        if (dados.indexOf('B005')){
              var posicao = B005.substring(37, 40)
              return posicao;             
            }
       }  
       var pendencias_bancarias = () => {
        if (dados.indexOf('B005')){
              var posicao = B005.substring(37, 40)
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
        if (dados.indexOf('B004')){
              var posicao = serasaHelper.formatDateWithMountAndYear(B004.substring(104, 110))
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

