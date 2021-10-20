c




const normalizeP006 = (P006) => {

}



return resultb001

    
   

   

    

const B353 = result.substring(974, 1088) //Bloco de “Resumo do registro de consultas (passagens)”.Controlado pela seqüencia 4 do registro P006. Nao se repete
const normalizaB353 = {
 tipo_registro: B353.substring(0,4),
  qdade_consultas_credito: B353.substring(5,8),
  data_atual_consulta: B353.substring(8,14),
  qdade_consultas_mes_atual: B353.substring(14,17),
  qdade_consultas_mes_1: B353.substring(17,20),
  qdade_consultas_mes_2: B353.substring(20,23),
  qdade_consultas_mes_3: B353.substring(23,26),
  qdade_total_consulta_cheques: B353.substring(26,29),
  qdade_consulta_cheques_mes_1: B353.substring(29,32),
  qdade_consulta_cheques_mes_2: B353.substring(32,35),
  qdade_consulta_cheques_mes_3: B353.substring(35,38),
  ultima_atualizacao_consulta: B353.substring(38,41)
}
/* detalhe registro da consulta */
const B354 = result.substring(1089, 1203)//pode repetir ate 5x
const normalizarB354 = {
  tipo_registro: B354.substring(0,4),
  data_consulta: B354.substring(5,13),
  origem_consulta: B354.substring(13,53),
  modalidade_consulta: B354.substring(53,65),
  tipo_moeda_consulta: B354.substring(65,68),
  valor_consulta: B354.substring(68,77)
}

const B354A = result.substring(1203, 1318)
//console.log(B354A)
const B354B = result.substring(1318, 1433)
//console.log(B354B)
const B354C = result.substring(1433, 1548)
//console.log(B354C)
const B354D = result.substring(1548, 1663)
//console.log(B354D)


/* bloco endereco alternativas */
const B370 = result.substring(1663, 1777) //Poderá se repetir para cada informação encontrada.Controlado pela seqüência 17 do registro B49C sempre é entregue aos pares(doissubtipos).
const normalizaB370 = {
tipo_registro: B370.substring(5,6),
ddd_fone_alternativo: B370.substring(6, 9),
fone_alternativo: B370.substring(9, 18),
endereco_alternativo : B370.substring(18, 88),
bairro_alternativo : B370.substring(88, 108),
cep_alternativo : B370.substring(108, 116)
}

const B370A = result.substring(1778, 1893)
const normalizaB370A = {
  tipo_registro: B370.substring(5, 6),
  ddd_fone_alternativoA: B370.substring(6, 9),
  fone_alternativoA: B370.substring(9, 18),
  endereco_alternativoA: B370.substring(18, 88),
  bairro_alternativoA: B370.substring(88, 108),
  cep_alternativoA: B370.substring(108, 116)
}

const B370B = result.substring(1894, 2007)
const normalizaB370B = {
  tipo_registroB: B370.substring(5, 6),
  ddd_fone_alternativoB: B370.substring(6, 9),
  fone_alternativoB: B370.substring(9, 18),
  endereco_alternativoB: B370.substring(18, 88),
  bairro_alternativoB: B370.substring(88, 108),
  cep_alternativoB: B370.substring(108, 116)
}

const B370C = result.substring(2008, 2122)
const normalizaB370C = {
  tipo_registroC: B370.substring(5, 6),
  ddd_fone_alternativoC: B370.substring(6, 9),
  fone_alternativoC: B370.substring(9, 18),
  endereco_alternativoC: B370.substring(18, 88),
  bairro_alternativoC: B370.substring(88, 108),
  cep_alternativoC: B370.substring(108, 116)
}
/* Bloco participaçao societária */
const B352 = result.substring(2123, 2237)//Bloco de “Participação Societária”.Controlado pela seqüência 6 do registro P006 de input.
const normalizaB352 = {
  tipo_registro: B352.substring(0,4),
  empresa: B352.substring(5,45),
  cnpj: B352.substring(45,53),
  participacao_societaria: B352.substring(53,58),  
  estado_empresa: B352.substring(58,60),
  situacao_empresa: B352.substring(60,103),
  inicio_participacao: B352.substring(103,109),
  ultima_atualizacao: B352.substring(109,115)
}

const B352A = result.substring(2238, 2352)
const normalizaB352A = {
  tipo_registro: B352A.substring(0, 4),
  empresa: B352A.substring(5, 45),
  cnpj: B352A.substring(45, 53),
  participacao_societaria: B352A.substring(53, 58),
  estado_empresa: B352A.substring(58, 60),
  situacao_empresa: B352A.substring(60, 103),
  inicio_participacao: B352A.substring(103, 109),
  ultima_atualizacao: B352A.substring(109, 115)
}

const B352B = result.substring(2353, 2467)
const normalizaB352B = {
  tipo_registro: B352B.substring(0, 4),
  empresa: B352B.substring(5, 45),
  cnpj: B352B.substring(45, 53),
  participacao_societaria: B352B.substring(53, 58),
  estado_empresa: B352B.substring(58, 60),
  situacao_empresa: B352B.substring(60, 103),
  inicio_participacao: B352B.substring(103, 109),
  ultima_atualizacao: B352B.substring(109, 115)
}

const B352C = result.substring(2468, 2582)

const B352D = result.substring(2583, 2697)

const B352E = result.substring(2698, 2812)

const B352F = result.substring(2813, 2927)

const B352G = result.substring(2928, 3042)

const B352H = result.substring(3043, 3157)

const B352I = result.substring(3158, 3272)


const B001A = result.substring(3273, 3387)
const normalizaB001A = { 
  cpf : B001A.substring(50, 61),
  rg : B001A.substring(61, 76),
  data_nascimento: B001A.substring(76, 84),
  cod_cidade: B001A.substring(84, 88),
  titular: B001A.substring(88, 89),
  situacao_cpf: B001A.substring(102, 103)
}
const B002A = result.substring(3388, 3502)

const B003A = result.substring(3503, 3617)

const B004A = result.substring(3618, 3732)


const B005 = result.substring(3733, 3847)
const normalizaB005 = {
tipo_registro: B005.substring(0,4),
ocupacao: B005.substring(5,15),
  renda: B005.substring(15,24),
  ct_serie: B005.substring(24,29),
  num_ct: B005.substring(29,36)
}

const B006 = result.substring(3848, 3963)
const normalizaB006 = {
  tipo_registro:B006.substring(0,4),
  razao_social:B006.substring(5,45),
  data_admissao_empresa: B006.substring(45,51),
  profissao: B006.substring(51,54),
  cargo: B006.substring(54,84)
}

/*referencias pessoais*/ 
//console.log(B006A)
const B054 = result.substring(3963, 4078)
//console.log(B054)
const B011 = result.substring(4078, 4192)
const normalizaB011 = {
tipo_registro: B011.substring(0,4),
  pessoa1: B011.substring(5,40),
  ddd: B011.substring(40,44),
fone:B011.substring(44,52),
ramal:B011.substring(52,56),
  pessoa2: B011.substring(56,91),
  ddd: B011.substring(91,95),
  fone: B011.substring(95,103),
  ramal: B011.substring(103,107),
} 
const B012 = result.substring(4193, 4308)
const normalizaB012= {
banco: B012.substring(5,25),
agencia:B012.substring(25,29),
conta: B012.substring(29,37),
ddd: B012.substring(37,41),
ramal:B012.substring(41,49),
desde: B012.substring(49,53),
}
/*cheque especial*/
const B013 = result.substring(4309, 4423)
const normalizaB013 = {
  tipo_registro: B013.substring(0,4),
  banco1_cheque_especial: B013.substring(5,25),
  limite_cheque_especial1: B013.substring(25,34),
  banco2_cheque_especial: B013.substring(34,54),
  limite_cheque_especial2: B013.substring(54,63)
}

const B014 = result.substring(4423, 4537)
const normalizaB014 = {
  tipo_registro: B014.substring(0, 4),
  banco_cartao1: B014.substring(5,25),
  bandeira_cartao1: B014.substring(25,35),
  banco_cartao2: B014.substring(35,55),
  bandeira_cartao2: B014.substring(55,65)
}

const B001B = result.substring(4538, 4653)
//console.log(B001B)
const B002B = result.substring(4654, 4769)
//console.log(B002B)
const B003B = result.substring(4770, 4884)
//console.log(B003B)
const B004B = result.substring(4884, 4999)
//console.log(B004B)


const B001C = result.substring(4999, 5114)


const B002C = result.substring(5114, 5229)

const B003C = result.substring(5229, 5344)

const B004C = result.substring(5344, 5459)

const B001D = result.substring(5459, 5574)

const B002D = result.substring(5574, 5689)

const B003D = result.substring(5689, 5804)

const B004D = result.substring(5804, 5919)

const B001E = result.substring(5919, 6034)

const B002E = result.substring(6034, 6149)

const B003E = result.substring(6149, 6264)

const B004E = result.substring(6254, 6379)

const B001F = result.substring(6379, 6494)

const B002F = result.substring(6494, 6609)

const B003F = result.substring(6609, 6724)

const B004F = result.substring(6724, 6839)

const A900 = result.substring(6839, 6954) //Bloco de “Mensagens Informativas”.

const T999 = result.substring(6954, 7069) //Registro de “Erros no processamento”.
// con


module.exports = {normalizeCpf}
