const managerCpf = require('../managers/cpfManager')
const repositoryCnpj = require('../managers/cnpjManager')
const httpSerasa = require('../helpers/httpSerasa')
const serasaHelper = require('../helpers/serasaHelper')
const cpfEnum = require('../enums/cpf')
const genderEnum = require('../enums/gender')

const resultSerasa = async (cpf) => {
 //retorna a resposta do serasa, substituir pela string provisoria estiver com acesso
 // const resultSerasa = await httpSerasa.getSerasaCpfCnpjAsync(cpf) 
 
 //provisório
 const retornoSerasa = "B49C      000000000000191FC     FI0000200000000000000N99SFIMAS                            SS            00S        000000000000000S         19900000000000000000000000000000000000000000000000000N 2020110600103500580058    0059                                                                        0000                    3#                                  00                                      N  P006SSSSS  99SSSSSSSS SSSSS                                                                                        B001TWSNRJC SHCHTHL OHIZ PMI NI GZEBKDH          0000000019100000000000000018991130MCO SN   381000001920180528   9CB002   2020060218991130MARIA DAS DORES                                              000000000000000     00000000  CB003            00                                       0000000000000613225820900000000000000009236376316        CB004HA WKM NDXRXNE                299  HD 319    MIRANDOPOLIS        SAO PAULO                SP04049060000000    CB3530742020110010070180480030000000020012020060200000000                                                          CB35420201104INDUSTRIA DE INSUMOS                                   00000000003334170                              CB35420201029OUTROS                                                 00000000007082019                              CB35420201027OUTROS                                                 00000000031242928                              CB35420201021S3ENG EMPRESA DE INTELIGENCIA APLICADA A               00000000004305879                              CB35420201021OUTROS                                                 00000000031242928                              CB3701000000000000HA WKM COPNDZESHG             313                                     ALPHAVILLE          06539225B3702SANTANA DE PARNAIBA           SPFDN UKI CIARSUN                                   20191212            00000000B3701000000000000HA WKM OZKAHZUFE              6                                       TRANSURB            06670220B3702ITAPEVI                       SPFDN UKI CIARSUN                                   20191031            00000000B352HELIO MARIO MORESCO ME                  7527323500000  EMPRESA EXTINTA.                           000000202005CB352JAMIR JOSE DA SILVA ME                  7529074200000  SITUACAO DO CNPJ EM 00/00/0000: ATIVA      000000202005CB352HEITOR PEREIRA                          7530098800000  EMPRESA EXTINTA.                           000000202005CB352JOAO RUSCHEINSKY                        7533561200000  EMPRESA EXTINTA.                           000000202005CB352SILVIO SERENEU CUNHA ME                 7536368900000  EMPRESA EXTINTA.                           000000202005CB352MARIO MANDELLI                          7538270500000  EMPRESA EXTINTA.                           000000202005CB352WALDEMAR KOHN                           7540973000000  EMPRESA EXTINTA.                           000000202005CB352ISAURA BRITTO SELONKE                   7541834300000  EMPRESA EXTINTA.                           000000202002CB352FELIX DA SILVA TELLES ME                7541879800000  EMPRESA EXTINTA.                           000000202005CB352ACACIO HOEPPERS ME                      7541898800000  SITUACAO DO CNPJ EM 00/00/0000: ATIVA      000000202004CB001FDN DKAC PNGGK RH MKEJWDC                    0000000019100000000012345600000000SPO      535735797920180528   9CB002   2017050519600101TXJNYKA ACIKN U UQUZ                         FCART IDENTIDADE000000000123456SSP  00000000SPCB003CASADO      01SUPERIOR COMACAJUTIBA                BA0000000000000111111999900111234567800129652145000        CB004T FH ZFUWMF                   41             JARDINS             CAPAO RICO               SP05731260000000    CB005SOCIO/PROP000005000000000000123 080000000000000000000000000000000000         0000000000000000000000           CB006UWCH YFLCCCI ZYUPN DVCK                 000000R$ ADMINISTRADOR                 DIRETOR                        CB054000010000MENSAL      ALUGUEL        ALUGUEL        000010000PAIS    IRMAO                                     CB011UWDKXI CAKSI RY PNMEN              0011767699990022NMYYMK SD FDZNY                    0011555599990000        CB012ITAU                0001015134070011121212120000000000                                                        CB013ITAU                000000000BANCO BRADESCO      000000000                                                    CB014ITAU                CREDICARD BANCO BRADESCO      AMEX                                                        CB001VWJVW                                        0000000019100000000000000000000000         548336571920180528   9CB002   2018070319830825                                                             000000000000000     00000000  CB003            00                                       0000000000000613225820900000000000000009236376316        CB004AL DOS QUINIMURAS 187                        PLANALTO PAULISTA   SAO PAULO                SP04068900201003    CB001XXJN YCLFCAI ESOEH                           0000000019100000000000000000000000         587067713920180528   9CB002   2007051819511123                                             M               000000000000000     00000000  CB003            00                                       0000000000000613225820900000000000000009236376316        CB004AL DOS QUINIMURAS 187                        PLANALTO PAULISTA   SAO PAULO                SP04068900201003    CB001UKLZK DCGLF HTQ GHUEYM                       0000000019100000000000000000000000         587082724920180528   9CB002   2007051819741218                                             F               000000000000000     00000000  CB003            00                                       0000000000000613225820900000000000000009236376316        CB004AL DOS QUINIMURAS 187                        PLANALTO PAULISTA   SAO PAULO                SP04068900201003    CB001UKLZK SIJ IHZE EIQMZ                         0000000019100000000000000000000000         587264953920180528   9CB002   2007052419701010                                             F               000000000000000     00000000  CB003            00                                       0000000000000613225820900000000000000009236376316        CB004AL DOS QUINIMURAS 187                        PLANALTO PAULISTA   SAO PAULO                SP04068900201003    CB001EXUZK DCOKF HK IHOX                          0000000019100000000000000000000000         587264999920180528   9CB002   2007052419721010                                             F               000000000000000     00000000  CB003            00                                       0000000000000613225820900000000000000009236376316        CB004AL DOS QUINIMURAS 187                        PLANALTO PAULISTA   SAO PAULO                SP04068900201003    CA900000500                                 NAO CONSTAM ANOTACOES NEGATIVAS PARA O DOCUMENTO CONSULTADO             T999000PROCESSO ENCERRADO NORMALMENTE                                                                             ?\n"

  if(retornoSerasa){
    //NORMALIZAR OS BLOCOS E SALVAR NO BANCO UTILIZANDO O resultSerasa
    let resultObject = await managerCpf.saveAllCpf(resultObject)
    return resultObject // AQUI SERÀ O RETORNO DOS DADOS NORMALIZADO, POR ENQUANDO NAO ALTERAR O RETORNO
  }else{
    console.error();
  }
}

const searchCNPJ = async (cnpj) => {

  const resultSerasa = await httpSerasa.getSerasaCpfCnpjAsync(cnpj)

  if (resultSerasa) {
    //NORMALIZAR OS BLOCOS E SALVAR NO BANCO UTILIZANDO O resultSerasa
    return resultSerasa // AQUI SERÀ O RETORNO DOS DADOS NORMALIZADO, POR ENQUANDO NAO ALTERAR O RETORNO
  } else {
    console.error();
  }
}

/*
const normalizeB49C = (B49C) => {
  const tipo_registro = B49C.substring(0, 4)
  const grafia_cpf = B49C.substring(11, 26)

  return { tipo_registro, grafia_cpf}
}

const normalizeB001 = (B001) => {
  console.log(B001)
  b001 = {}
  b001.nome = B001.substring(4, 48)
  b001.cpf = B001.substring(49, 60)
  b001.rg = B001.substring(60, 75)
  b001.dataNascimento = serasaHelper.formatDate(B001.substring(75, 83))
  b001.codeCidade = B001.substring(83, 87)
  b001.titular = B001.substring(87, 88)
  b001.situacaoCpf = cpfEnum.getCpfSituation(B001.substring(101, 102));
  
  return b001
}

const normalizeB002 = (B002) => {
  console.log(B002)
  b002 = {}

  b002.dataUltimaAtualizacaoCadastral = serasaHelper.formatDate(B002.substring(7, 15))
  b002.dataNascimento = serasaHelper.formatDate(B002.substring(15, 23)) // informada pela empresa
  b002.nomeMae = B002.substring(23, 68)
  b002.sexo = genderEnum.genderFormater(B002.substring(68, 69))
  b002.tipoDocumento = B002.substring(69, 84)
  b002.numeroDocumentoIdentidade = B002.substring(84, 98)
  b002.orgaoEmissor = B002.substring(98, 104)
  b002.dataEmissao = serasaHelper.formatDate(B002.substring(104, 112))
  b002.ufEmissao = B002.substring(112, 114)

  return b002
}

const normalizeB003 = (B003) => {
  console.log(B003)

  let b003 = {}
  b003.estado_civil = B003.substring(5, 17)
  b003.dependentes = B003.substring(17, 19)
  b003.escolaridade = B003.substring(19, 31)
  b003.munic_nascimento = B003.substring(31, 56)
  b003.uf_nascimento = B003.substring(56, 58)
  b003.cpf_conjuge = B003.substring(58, 69)
  b003.ddd_residencial = B003.substring(69, 73)
  b003.fone_residencial = B003.substring(73, 81)
  b003.ddd_comercial = B003.substring(81, 85)
  b003.fone_comercial = B003.substring(85, 93)
  b003.ramal_comercial = B003.substring(93, 97)
  b003.fone_celular = B003.substring(97, 105)
  b003.cod_cliente = B003.substring(105, 107)

  return b003
}

const normalizeB004 = (B004) => {
  console.log(B004)
  b004 = {}
  b004.endereco = B004.substring(4, 49)
  b004.bairro = B004.substring(49, 69)
  b004.cidade = B004.substring(69, 94)
  b004.estado = B004.substring(94, 96)
  b004.cep = B004.substring(96, 104)
  b004.data_inicio_residencia = serasaHelper.formatDateWithMountAndYear(B004.substring(104, 110))

  return b004
}

const normalizeB005 = (B005) => {
  console.log(B005)
  b005 = {}
  b005.ocupacao = B005.substring(5, 15)
  b005.renda = B005.substring(15, 24)
  b005.serieCarteiraTrabalho = B005.substring(24, 29)
  b005.numeroCarteiraTrabalho = B005.substring(29, 36)
  b005.pocentagemParticipacao = B005.substring(37, 40)
  b005.rendaMedia = B005.substring(40, 49)
  b005.LimIt = B005.substring(49, 58)
  b005.LimIt2 = B005.substring(58, 67)
  b005.QTDE_OBS = B005.substring(67, 73)
  b005.tipoTecnologia = B005.substring(73, 77)
  b005.canalVenda = B005.substring(77, 82)
  b005.valorAluguel = B005.substring(82, 91)


  return b005
}

const normalizeB006 = (B006) => {
  console.log(B006)

  b006 = {}
  b006.ocupacao = B006.substring(5, 15)
  b006.renda = B006.substring(15, 24)


  return b006
}

*/

const sendZohoResultSerasaFromMongoByCpf = async (bodyCpf) => {
  const resultMongoByCpf = await managerCpf.getByCpf(bodyCpf)
  return resultMongoByCpf
}


const sendZohoResultSerasaFromMongoByCnpj = async (bodyCnpj) => {
  const resultMongoCnpj = await repositoryCnpj.getByCnpj(bodyCnpj)
  return resultMongoCnpj
}

module.exports = {
  searchCPF,
  sendZohoResultSerasaFromMongoByCpf,
  sendZohoResultSerasaFromMongoByCnpj,
  resultSerasa
}
