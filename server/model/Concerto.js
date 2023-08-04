const mongoose = require('mongoose');

const concertoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  data: { type: Date, required: true },
  location: {
    città: { type: String, required: true },
    luogo: { type: String, required: true }
  },
  programma: { type: [String], required: true },
  incasso: { type: Int32, required: true },
  n_posti: { type: Int32, required: true },
  biglietti_venduti: { type: Int32, required: true }
});

const Concerto = mongoose.model('Concerto', concertoSchema);

module.exports = Concerto;
