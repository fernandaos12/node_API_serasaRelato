

const objPassword = async(password)=>{
    const newpass = parseInt(password.substring(5, 8));
    newpass++
    return(newpass);
} 

module.exports = { objPassword }