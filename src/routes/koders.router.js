const express = require('express');
const kodersUsecase = require("../usecases/koders.usecases");

const router = express.Router();

// GET /koders
router.get('/', async (request, response) => {
    try {
        const koders = await kodersUsecase.getAll();
        response.json({
            success: true,
            data: { koders }
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

// POST /koders
router.post('/', async (request, response) => {
    try {
        const koderCreated = await kodersUsecase.create(request.body);
        response.json({
            success: true,
            data: { koder: koderCreated }
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

// GET /koders/:id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const koder = await kodersUsecase.findById(id);

        if (!koder) {
            response.status(404);
            response.json({
                success: false,
                error: 'Koder not found'
            });
            return;
        }

        response.json({
            success: true,
            data: { koder }
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

// DELETE /koders/:id
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const koderDeleted = await kodersUsecase.deleteById(id);

        if (!koderDeleted) {
            response.status(404);
            response.json({
                success: false,
                error: 'Koder not found'
            });
            return;
        }

        response.json({
            success: true,
            data: { koder: koderDeleted }
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

// PATCH /koders/:id
router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const koderUpdate = await kodersUsecase.updateById(id, request.body);

        if (!koderUpdate) {
            response.status(404);
            response.json({
                success: false,
                error: 'Koder not found'
            });
            return;
        }

        response.json({
            success: true,
            data: { koder: koderUpdate }
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
