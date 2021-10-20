//const mongoose = require('mongoose');
/*const { startAsync } = require('../database');
const { db, collection } = require('../data/repositories/cpfRepository');
const CpfManager = require('../managers/cpfManager')*/

const{ resultserasa } = require('./clientService');

/*async function inserirCpf(req, res){
    const inserirCpf = await mongoose.model('userserasacpf')
        // dados = "B49C......000000000000191FC.....FI0000200000000000000N99SCONAS............................SS............00S........000000000000000S.........19900000000000000000000000000000000000000000000000010S.2010102711113801350099....0100B4CB49C016622EXA........................................................0000....................3#..................................00......................................N..P006SSSSS..05SSSSSSSS.SSSSS........................................................................................B001TESTE.DE.FORNECEDO...........................0000000019100514545444545419780115GRS.S....390485017220100812...3CB002...2010102219780115MAMAE.DO.TESTEAA.CCC.........................MCART.IDENTIDADE005145454445454.....00000000ROCB003CASADO......00SUPERIOR.INCSAO.PAULO................SP0000000027200116455158000122121212100116455158011........CB004R.CACHOEIRA...................25.............JARDIM.ROSA.DE.FRANCGUARULHOS................SP07080000000000....CB005SOCIO / PROP000000400000000000123.000000000000000000000000000000000000.........0000000000000000000000...........CB006TESTE...................................200801R$.SERVENTUARIO.JUSTICA..........SERV...........................CB3531672010100570360420320640170170250052010102200000000..........................................................CB35420101026HOKEN.TESTE.STRING.....................................00000000002174059..............................CB3701000000000000TESTE.........................2222222.................................TESTE.26 / 11 / 01......19360000B35700041REFIN.......................200801201001R$.001111111SERASA..................04016063434..................CB35900005CHEQUES.S/FUNDOS-ACHEI.CCF..200609201007R$.000010000EXEMPLO.AAAA........SPO..............................CB36100092PROTESTOS...................200601200909R$.000001111SAO.PAULO................SP000212301.................CB36300004ACOES.JUDICIAIS.............200608200905R$.000001500EXECUCAO............SP000003754......................CB36700008DIVIDA.VENCIDA..............200801201005R$.000002000NEDA.DA.SILVA.GONCALABS.000013456.....................B35804ADIANTAMENTOI0013767406..20100101ADNR$.00111111110101010101......SERASA..................000414809..........CB36020100701000001120001R$.000010000EXEMPLO.AAAA.......M00000506530001SAO.PAULO................SP000051000000001..CB36220090204R$.0000044000001SAO.PAULO................SP00092.00000000A0005334420..................................CB36420090501EXECUCAO.............R$.00000150000010001SAO.PAULO................SP00004.C0000462305.................CB36820100504BSR$.000002000174246...........NEDA.DA.SILVA.GONCALABS.0000850014427517..................N.............B352EMPRESA.DE.TESTE.51197606...............5119760600500SPSITUACAO.DO.CNPJ.EM.09 / 01 / 2008:.INAPTA.....200809200810CB231FINANCIAMENT201009001000550020101000100055002010110010005500201012001000550020110100100055002011020000000000..CB231TOTAL.......000000001000550000000000100055000000000010005500000000001000550000000000100055000000000000000000..CB23212345678.........FI20100101062000055000000055000000000000000005500201002012011010101200100000000000000NS......CB233............................................................MENSAL......S00020000000..........................CB23412345678.........001000005500201002010000000000000.002000005500201003010000000000000..........................CB011ZE.MIRA............................001212112212001111.................................0011000000110011........CB012ITAU................1685001381150011558522160000000000........................................................CB013BRADESCO............000001500BRADESCO............000000011....................................................CB014BRADESCO............DINERS....BRADESCO............VISA......N...................MASTERCARD....................CB001CLIENTE.TESTE.AAAAAA.........................000000019100000001812813700000000SPO......000100001220100812...3CB002...2009122800000000.............................................M...............000000018128137SSPSP00000000SPCB003SOLTEIRO....00SUPERIOR    .COM.........................SP0000000000000112847881000112847883500007214646600........CB004R.DO.ALPISTE..................17.............JD.ELIANE...........SAO.PAULO................SP35782160000000....CB005EMPREGADO.000000000000000000000.000000000000000000000000000000000000.........0000000000000000000000...........CB006SERASA..................................199110...ANALISTA.DE.SISTEMAS..........ANALISTA.......................CB232X1...............CO20030703062000000300000000300000000100000000100200307032003090300000100122222222222NS......CB233............................................................MENSAL......000100000000..........................CB23245651285455400054CP20040112062000000200000000200000000080000000060200402120000000000200100000000000000NS......CB233JLKADSJLK...................................................MENSAL......S00000000000..........................CB23445651285455400054001000000060200402120000000000000.002000000060200403120000000000000..........................CB2321234.............CQ20021125062000001200000001200000000600000000600200211252002122500200100000000000000NN......CB233............................................................MENSAL......S00000000000..........................CB2341234.............001000000600200211250000000000000.002000000600200212250000000000000..........................CB232SNF7141155401....FI20021024062000001500000001500000000500000000500200210240000000000300100011111111111NN......CB233............................................................MENSAL......S00100000000..........................CB234SNF7141155401....001000000500200210240000000000000.002000000500200211240000000000000..........................CT999000PROCESSO.ENCERRADO.    NORMALMENTE............................................................................."
      
     // var dados = dados.split(' ');*/
      
     var dados = resultserasa
     //var array = dados.split(/\./)

       var nome = () => {
        if (dados.indexOf('CB002')!=-1){
              var posicao = dados.substring(629,634);
              return posicao;              
            }
       }
       var cpf = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(636,744);
              return posicao;              
            }
       }
       var data_nascimento = () => {
        if (dados.indexOf('CB002')){ 
              var posicao = dados.substring(629,744);
              return posicao;              
            }
       }
       var nome_mae = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;              
            }
       }
       var sexo = async() => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;              
            }
       }
       var nomes_homonimos = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }
       var dependentes = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var escolaridade = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var estado_civil = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var status = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;            
            }
       }
       var endereco = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;            
            }
       }
       var bairro = () => {
        if (dados.indexOf('CB002')){
             var posicao = dados.substring(629,744);
              return posicao;              
            }
       }
       var cidade = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;              
            }
       }
       var estado = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;              
            }
       }
       var tel_comercial = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }    
       var tel_celular = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var tel_residencial = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var enderecoComercial = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var pendencias_comerciais = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var pendencias_bancarias = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var cheque_fundo = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var protestos = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var acoes_juridicas = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var falencias = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var dividas_vencidas = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var data_divida = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var segmento_divida = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var empresa_credora = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var cnpj_empresa_credora = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var uf_empresa_credora = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var data_insercao_dados_pela_empresa = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }    
       var escore = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }  
       var chance_pagamento = () => {
        if (dados.indexOf('CB002')){
              var posicao = dados.substring(629,744);
              return posicao;             
            }
       }   
        
         //return console.log('cpf registrado no banco de dados')


module.exports = {
    nome, cpf, nome_mae, sexo, nomes_homonimos, status, endereco, bairro, cidade, 
    estado, tel_comercial, tel_celular,tel_residencial, endereco,
    pendencias_comerciais,pendencias_bancarias, cheque_fundo,
    protestos, acoes_juridicas,falencias, dividas_vencidas, segmento_divida, empresa_credora, 
    cnpj_empresa_credora, enderecoComercial,
    data_insercao_dados_pela_empresa, uf_empresa_credora, data_divida, data_nascimento, 
    estado_civil, dependentes, escolaridade, escore, chance_pagamento
}

