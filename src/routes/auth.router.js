const express = require('express');
const authCase = require('../usecases/auth.usecases');

const router = express.Router();

// POST /login
router.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body;
        const token = await authCase.login(email, password);
        response.json({
            success: true,
            data: { token },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
