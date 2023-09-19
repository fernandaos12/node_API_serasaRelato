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

*///variaveis zoho

// const sendZohoResultSerasaFromMongoByCpf = async (bodyCpf) => {
//   const resultMongoByCpf = await managerCpf.getByCpf(bodyCpf)
//   return resultMongoByCpf
// }


// const sendZohoResultSerasaFromMongoByCnpj = async (bodyCnpj) => {
//   const resultMongoCnpj = await repositoryCnpj.getByCnpj(bodyCnpj)
//   return resultMongoCnpj
// }
