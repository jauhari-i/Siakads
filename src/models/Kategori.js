const mongoose = require('mongoose');

const KategoriSchema = new mongoose.Schema({
  namaKategori: {
    type: String,
    default: '',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Kategori = mongoose.model('kategori', KategoriSchema);
