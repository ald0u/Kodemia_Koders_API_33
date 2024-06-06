// 1 Traemos el modelo
const Koders = require('../models/koders.model');

const createError = require('http-errors');

//ENCRYP
const encrypt = require('../lib/encrypt')

// 2 Creamos las funciones

// const create = async (koderData) => await Koders.create(koderData);
const create = async (koderData) => {
    const koderFound = await Koders.find({ email: koderData.email });

    if (koderFound.length > 0) {
        throw new Error('Koder with this email already exists');
    }

    const password = await encrypt.encrypt(koderData.password);
    koderData.password = password;

    const newKoder = await Koders.create(koderData);
    return newKoder;
};


const getAll = async () => {
    const allKoders = await Koders.find().populate("generation", );
    return allKoders;
}
const getById = async (id) => {
    const koder = await Koders.findById(id).populate("generation");
    return koder;
}

const deletebyId = async (id) => {
    const koderDeleted = await Koders.deletebyId(id);
    return koderDeleted;
}

const updateById = async (id, newKoderData) => {
    const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, {
        new: true
    });
    return updatedKoder;
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