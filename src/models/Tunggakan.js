const mongoose = require('mongoose');

const tunggakanSchema = new mongoose.Schema({
  siswaId: {
    type: String,
    unique: true,
    required: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  spp: {
    type: Number,
    default: 0,
  },
  dsp: {
    type: Number,
    default: 0,
  },
  lainnya: {
    type: Number,
    default: 0,
  },
});

module.exports = Tunggakan = mongoose.model('tunggakan', tunggakanSchema);
