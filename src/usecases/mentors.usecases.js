// 1 Traemos el modelo
const Mentors = require('../models/mentors.model');

// 2 Creamos las funciones

// const create = async (mentorData) => await Mentors.create(mentorData);
const create = async (mentorData) => {
    const newMentor = await Mentors.create(mentorData);
    return newMentor;
};

const getAll = async () => {
    const allMentors = await Mentors.find();
    return allMentors;
}
const getById = async (id) => {
    const mentor = await Mentors.findById(id);
    return mentor;
}

const deletebyId = async (id) => {
    const mentorDeleted = await Mentors.deletebyId(id);
    return menotrDeleted;
}

const updateById = async (id, newMentorData) => {
    const updatedMentor = await Mentors.findByIdAndUpdate(id, newMentorData, {
        new: true
    });
    return updatedMentor;
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