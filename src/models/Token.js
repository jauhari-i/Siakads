const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = Token = mongoose.model('token', tokenSchema);
