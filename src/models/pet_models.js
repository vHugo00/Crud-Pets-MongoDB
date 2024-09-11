const db = require('../config/db.js');

const Schema = db.Schema;

const petSchema = new Schema({
  nome: {
    type: String,
    required: true
  }
});

const Pet = db.model("Pet", petSchema);

module.exports = Pet;