const mongoose = require('mongoose');

const PelanggaranSchema = new mongoose.Schema({
  siswa: {
    type: String,
  },
  jenis: {
    type: Object,
  },
  guru: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Pelanggaran = mongoose.model('pelanggaran', PelanggaranSchema);
