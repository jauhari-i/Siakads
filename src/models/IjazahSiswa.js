const mongoose = require('mongoose');

const ijazahSchema = new mongoose.Schema({
  nisn: {
    type: String,
    default: '0',
  },
  noUjianSmp: {
    type: String,
    default: '0',
  },
  namaLengkap: {
    type: String,
    default: '',
  },
  tempatLahir: {
    type: String,
    default: '',
  },
  tglLahir: {
    type: Date,
  },
  namaAyah: {
    type: String,
    default: '',
  },
  siswaId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = Ijazah = mongoose.model('ijazahsiswa', ijazahSchema);
