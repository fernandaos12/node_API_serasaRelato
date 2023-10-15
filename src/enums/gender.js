const values = {
  M: 'Masculino',
  F: 'Feminino'
}

const genderFormater = (gender) => {
  if (!gender) {
    return null
  }

  const value = Object.keys(values).find(key => key === gender)

  if (!value) {
    return 'Sexo não encontrado'
  }

  return values[value]
}

module.exports = {
  genderFormater
}
