const express = require('express');
const generationsUsecase = require("../usecases/generations.usecases");

const router = express.Router();

//GET /generations
router.get('/', async (request, response) => {
    try {
        const generations = await generationsUsecase.getAll()
        response.json({
            succes: true,
            data: { generations }
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message
        })
    }
})

//POST /generations
router.post('/', async (request, response) => {
    try {
        const koderCreated = await generationsUsecase.create(request.body)
        response.json({
            succes: true,
            data: { koder: koderCreated }
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message
        })
    }
})

//GET /generations id
router.get('/', async (request, response) => {
    try {
        const { id } = request.params
        const koder = await generationsUsecase.findById(id)

        response.json({
            succes: true,
            data: { koder }
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message
        })
    }
})
//GET /generations
router.delete('/', async (request, response) => {
    try {
        const { id } = request.params;
        const koderDeleted = await generationsUsecase.deleteById(id);

        response.json({
            succes: true,
            data: { generation: koderDeleted }
        })

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message
        })
    }
})

//PATCH
router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const generationUpdate = await generationsUsecase.updateById(id, request.body);

        response.json({
            succes: true,
            data: { generation: generationUpdate }
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message
        })
    }
})

module.exports = router;