const mongoose = require('mongoose');

const JenisPelanggaranSchema = new mongoose.Schema({
  namaPelanggaran: {
    type: String,
    default: '',
  },
  kategori: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    default: '',
  },
  poin: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = JenisPelanggaran = mongoose.model('jenispelanggaran', JenisPelanggaranSchema);
