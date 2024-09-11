const express = require("express");
router = express.Router()

const pet_controller = require('../controllers/pet_controller')

router.post('/', pet_controller.createPet)
router.get('/', pet_controller.getPets)
router.put('/:id', pet_controller.updatePet)
router.delete('/:id', pet_controller.deletePet)

module.exports = router