const mongoose = require('mongoose')
const configurationManager = require('./managers/configurationManager')
const mongodbUrlt =  configurationManager.getMongoUrl()


const startAsync = async () => {
  
  await mongoose.connect(mongodbUrlt, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  mongoose.set('useFindAndModify', false)
}

const stopAsync = async () => {
  await mongoose.disconnect()
}

module.exports = {
  startAsync,
  stopAsync
}
