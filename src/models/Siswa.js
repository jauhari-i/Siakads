const mongoose = require('mongoose');

const siswaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: Number,
    default: 0,
  },
  imgUrl: {
    type: String,
    required: false,
    default:
      'https://res.cloudinary.com/siakadsmktelkommalang/image/upload/v1591678783/269-2697881_computer-icons-user-clip-art-transparent-png-icon_yi1dtt.png',
  },
  kelas: {
    type: String,
    default: '',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Siswa = mongoose.model('siswa', siswaSchema);
