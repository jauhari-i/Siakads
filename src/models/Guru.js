const mongoose = require('mongoose');

const guruSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nik: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Number,
    default: 0,
  },
  roles: {
    type: Number,
    default: 1,
  },
  imgUrl: {
    type: String,
    required: false,
    default:
      'https://res.cloudinary.com/siakadsmktelkommalang/image/upload/v1591678783/269-2697881_computer-icons-user-clip-art-transparent-png-icon_yi1dtt.png',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  verified_at: {
    type: Date,
    required: false,
  },
});

module.exports = Guru = mongoose.model('guru', guruSchema);
