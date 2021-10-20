const passwordRepository = require('../data/repositories/passwordRepository')
const passwordGerar = require('../services/gerarpassword')

const getPassword = async()=>{
    const resultPassword = await passwordRepository.findOne({})
    return resultPassword.password
} 

const saveNewPassword = async (passwordCode)=>{
    await passwordGerar.insertpword()
    await passwordRepository.create({ password: passwordCode })
}


const updatePassword = async (newPassword) => {
    await passwordRepository.updateMany({ password: newPassword})
}
module.exports = {
    getPassword,
    saveNewPassword,
    updatePassword}