const mongoose = require('mongoose');

const guruProfilSchema = new mongoose.Schema({
  guruId: {
    type: String,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ProfilGuru = mongoose.model('profilguru', guruProfilSchema);
