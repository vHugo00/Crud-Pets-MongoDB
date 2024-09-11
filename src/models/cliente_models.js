const db = require('../config/db.js');

const Schema = db.Schema;

const clienteSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  cep_endereco: {
    type: Number,
    required: true,
  },
  numero_casa: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
});

const Cliente = db.model("Cliente", clienteSchema);

module.exports = Cliente;