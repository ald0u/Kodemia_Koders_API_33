const createError = require('http-errors');
const Koders = require('../models/koders.model');
const encrypt = require('../lib/encrypt');
const jwt = require('../lib/jwt');

async function login(email, password) {
    const koder = await Koders.findOne({ email: email })

    if (!koder) {
        throw createError(401, 'invalid');
    }

    const isPasswordValid = await encrypt.compare(password, koder.password);

    if (!isPasswordValid) {
        throw createError(401, 'Invalid Data')
    }

    const token = jwt.sign({ id: koder.id });

    return token;
}

module.exports = {
    login
}