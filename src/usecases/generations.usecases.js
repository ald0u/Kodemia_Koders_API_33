// 1 Traemos el modelo
const Generations = require('../models/generations.model');

// 2 Creamos las funciones

// const create = async (generationData) => await Generations.create(generationData);
const create = async (generationData) => {
    const newGeneration = await Generations.create(generationData);
    return newGeneration;
};

const getAll = async () => {
    const allGenerations = await Generations.find();
    return allGenerations;
}
const getById = async (id) => {
    const generation = await Generations.findById(id);
    return generation;
}

const deletebyId = async (id) => {
    const generationDeleted = await Generations.deletebyId(id);
    return generationDeleted;
}

const updateById = async (id, newGenerationData) => {
    const updatedGeneration = await Generations.findByIdAndUpdate(id, newGenerationData, {
        new: true
    });
    return updatedGeneration;
}

// 3 exportamos las funciones
module.exports = {
    create,
    getAll,
    getById,
    deletebyId,
    updateById
}

// -------------> Crear las rutas