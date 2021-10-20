const generateNewPassword = (password) => {
  let prefixPassword = password.substring(0, 5)
  let sufixPassword = parseInt(password.substring(5, 8))
  let incrementedSufix = (sufixPassword + 1).toString()
  if (incrementedSufix.length < 3){
    incrementedSufix = addLeadingZero(incrementedSufix)
  }
  let newPassword = prefixPassword + incrementedSufix
  return newPassword
}

const addLeadingZero = (stringNumber) => {
  let leadingZoeros
  if (stringNumber.length == 1){
    leadingZoeros = "00"
  }
  if (stringNumber.length == 2) {
    leadingZoeros = "0"
  }
  return [stringNumber.slice(0, 0), leadingZoeros, stringNumber.slice(0)].join('')
}

const formatDate = (date) => {
  year = date.substring(0, 4)
  mounth = date.substring(4, 6)
  day = date.substring(6, 8)

  formatedDate = day + "/" + mounth + "/" + year

  return formatedDate

}

const formatDateWithMountAndYear = (date) => {
  year = date.substring(0, 4)
  mounth = date.substring(4, 6)

  formatedDate = mounth + "/" + year

  return formatedDate

}

module.exports = {
  generateNewPassword,
  formatDate,
  formatDateWithMountAndYear
}
