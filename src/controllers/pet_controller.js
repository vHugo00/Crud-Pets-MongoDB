const Pet = require('../models/pet_models');

exports.createPet = async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('clienteId');
    res.status(200).json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Pet deletado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
