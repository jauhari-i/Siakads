const mongoose = require('mongoose');

const PelanggaranSchema = new mongoose.Schema({
  siswaId: {
    type: String,
  },
  jenis: {
    type: String,
  },
  guru: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Pelanggaran = mongoose.model('pelanggara', PelanggaranSchema);
