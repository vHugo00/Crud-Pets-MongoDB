const express = require('express');
const petController = require('../controllers/pet_controller');

const router = express.Router();

router.post('/', petController.createPet);
router.get('/', petController.getPets);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);

module.exports = router;
