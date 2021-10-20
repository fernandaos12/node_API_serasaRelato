const values = {
    0: 'CPF nao confirmado no cadastro até a data atual',
    2: 'CPF ativo',
    6: 'CPF suspenso',
    9: 'CPF cancelado'
}


const getCpfSituation = (situation) => {
    if (!situation) {
        return null
    }

    const value = Object.keys(values).find(key => key === situation)

    if (!value) {
        return "CPF nao encontrado"
    }

    return values[value]
}

module.exports = {
    getCpfSituation
}