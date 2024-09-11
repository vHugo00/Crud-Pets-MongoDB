const express = require("express");
router = express.Router()

const cliente_controller = require('../controllers/cliente_controller')

router.post('/', cliente_controller.createCliente)
router.get('/', cliente_controller.getClientes)
router.put('/:id', cliente_controller.updateCliente)
router.delete('/:id', cliente_controller.deleteCliente)

module.exports = router 