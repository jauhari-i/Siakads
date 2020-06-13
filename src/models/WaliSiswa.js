const mongoose = require('mongoose');

const waliSchema = new mongoose.Schema({
  nik: {
    type: Number,
    unique: true,
  },
  nama: {
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
  agama: {
    type: String,
    default: '',
  },
  wargaNegara: {
    type: String,
    default: '',
  },
  pendidikan: {
    type: String,
    default: '',
  },
  pekerjaan: {
    type: String,
    default: '',
  },
  penghasilan: {
    type: String,
    default: '',
  },
  alamat: {
    type: String,
    default: '',
  },
  tlp: {
    type: String,
    default: '',
  },
  tahunMeninggal: {
    type: Number,
    default: 0,
  },
  siswaId: {
    type: String,
    required: true,
  },
});

module.exports = WaliSiswa = mongoose.model('walisiswa', waliSchema);
