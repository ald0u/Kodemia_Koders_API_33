const express = require('express');
const mentorsUsecase = require("../usecases/mentors.usecases");

const router = express.Router();

//GET /mentors
router.get('/', async (request, response) => {
    try {
        const mentors = await mentorsUsecase.getAll()
        response.json({
            succes: true,
            data: { mentors }
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message
        })
    }
})

//POST /mentors
router.post('/', async (request, response) => {
    try {
        const koderCreated = await mentorsUsecase.create(request.body)
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

//GET /mentors id
router.get('/', async (request, response) => {
    try {
        const { id } = request.params
        const koder = await mentorsUsecase.findById(id)

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
//GET /mentors
router.delete('/', async (request, response) => {
    try {
        const { id } = request.params;
        const koderDeleted = await mentorsUsecase.deleteById(id);

        response.json({
            succes: true,
            data: { mentor: koderDeleted }
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
        const mentorUpdate = await mentorsUsecase.updateById(id, request.body);

        response.json({
            succes: true,
            data: { mentor: mentorUpdate }
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