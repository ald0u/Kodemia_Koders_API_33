const createError = require('http-errors');
const jwt = require('../lib/jwt');
const kodersUsecases = require('../usecases/koders.usecases');

async function auth(request, response, next) {
    try {
        const authorization = request.headers.authorization;

        if (!authorization) {
            throw createError(401, 'token required')
        }

        const payload = jwt.verify(token);

        payload.id = await kodersUsecases.getById(payload.id);

        request.user = user;

    } catch (error) {
        response.status(401);
        response.json({
            succes: false,
            error: error.message,
        })
    }
}

module.exports = auth;