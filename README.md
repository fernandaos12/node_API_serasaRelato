# Como funciona a integração

  -  Api de Integração Serasa de layout Relato básico.

# Fluxo da integração

  - Pelo endpoint /consulta/:documento, insere o cpf ou cnpj para consulta, a partir desse enpoint haverá tratamento de acordo com o tipo de documento cpf ou cnpj pela quantidade de caracteres, onde irá acessar o respectivo endpoint do serasa com seu respectivo string de consulta e o retorno será a string de retorno da consulta onde será gravado no mongodb, posteriormente separado por blocos para cada propriedade do relatório com substring para o retorno de dados para o front.

# Integrações

  - Exemplo de integração serasa relato basico com o nodejs e mongodb

# Banco de dados

   - Utilizamos o mongodb para fazer os logs de erros e o gerenciamento de tokens do Serasa. 
    Para subir uma instancia, é recomendado utilizar o docker.
