//crear una constatnte de encrypt
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

//funcion de encrypt    
function encrypt(text) {
    return bcrypt.hash(text, SALT_ROUNDS)
}

//funcion para comparar
function compare(plainText, hash) {
    return bcrypt.compare(plainText, hash)
}

//exportamos
module.exports = {
    encrypt,
    compare
}

