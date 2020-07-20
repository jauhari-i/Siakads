const mongoose = require("mongoose");

const laporanSchema = new mongoose.Schema({
  pengaduan: {
    type: String,
  },
  lokasi: {
    type: String,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Lapor = mongoose.model("laporan", laporanSchema);
