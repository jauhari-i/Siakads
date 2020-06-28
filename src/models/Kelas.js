const mongoose = require('mongoose');

const kelasSchema = new mongoose.Schema({
  namaKelas: {
    type: String,
  },
  jurusan: {
    type: String,
    uppercase: true,
  },
  waliKelas: {
    type: String,
    unique: true,
  },
  tingkat: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Kelas = mongoose.model('kelas', kelasSchema);
