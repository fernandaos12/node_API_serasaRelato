const{ blocosRetorno } = require('./serasaService');
const{ situacaoCpf } = require('./enums/situacaoCpf');

const tamanhoBloco = 115;

async function BlocoN200(req,res) {

  if (blocosRetorno != null && blocosRetorno.includes("N200"))
  {
    const IndexN200 =  blocosRetorno.IndexOf("N200");
    const resultN200 = blocosRetorno.substring(IndexN200, tamanhoBloco);

    const tipoRegistro = resultN200.substring(1,4);
    const subtipo = resultN200.substring(5,2);

    const situacaoDoc = resultN200.substring(85,2); /*Adicionar enum situacao */

      if(situacaoDoc)
      {
        return situacaoCpf.value;
      }
      else
      {
        return "Não contém dados."
      }     
    

    const dataSituacaoDoc = resultN200.substring(87,8);
    const CCF = resultN200.substring(95,1);
    const reservado = resultN200.substring(96,20);
    
    if (subtipo == "0")
    {
      const nomeRazao = resultN200.substring(7,70);
      
    }
    else
    {
      const nomeMae = resultN200.substring(7,40);
      
    }
    
    if (documento == cpf)
    {
      const dataNascimento = resultN200.substring(77,8); /* Se cpf é datanasc se cnpj é data fundacao e se zero data nao informada*/
      
    }
    else if(documento == cnpj )
    {
      const dataFundacao = resultN200.substring(77,8);
    }
    else{
      return "Data não informada."
    }
  }
  else{
    return "Sem dados"
  }
      

}

module.exports = {
    BlocoN200
}