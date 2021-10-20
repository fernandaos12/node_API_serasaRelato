

async function insertpword(req, res) {

    const pwordNew = Math.random().toString(36).substr(2, 8).toUpperCase();
    const pwordOld = Math.random().toString(36).substr(2, 8).toUpperCase();

    try {
        await pwordModel.create({ 
            passwordNew: pwordNew, 
            passwordOld: pwordOld
        })
        return console.log('gerou senha');

    } catch (err) {
        return err
    }

}
insertpword()

module.exports = {insertpword}
