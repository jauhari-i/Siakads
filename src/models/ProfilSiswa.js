const mongoose = require('mongoose');

const profilSiswaSchema = new mongoose.Schema({
  pin: {
    type: Number,
    unique: true,
  },
  namaLengkap: {
    type: String,
  },
  nik: {
    type: String,
    unique: true,
  },
  nis: {
    type: String,
    unique: true,
  },
  nisn: {
    type: String,
    unique: true,
  },
  tempatLahir: {
    type: String,
  },
  tanggalLahir: {
    type: Date,
  },
  jenisKelamin: {
    type: Number,
  },
  noUn: {
    type: String,
    unique: true,
  },
  agama: {
    type: String,
  },
  negara: {
    type: String,
    default: 'Indonesia',
  },
  anakKe: {
    type: Number,
  },
  saudaraKandung: {
    type: String,
  },
  saudaraTiri: {
    type: String,
  },
  saudaraAngkat: {
    type: String,
  },
  statusYP: {
    type: String,
    default: 'Tidak',
  },
  bahasa: {
    type: String,
  },
  alamatMalang: {
    type: String,
  },
  rt: {
    type: Number,
  },
  rw: {
    type: Number,
  },
  dusun: {
    type: String,
  },
  desaKel: {
    type: String,
  },
  kecamatan: {
    type: String,
  },
  kodePos: {
    type: Number,
  },
  jenisTinggal: {
    type: String,
  },
  transportasi: {
    type: String,
  },
  tlpMalang: {
    type: String,
  },
  tinggalDengan: {
    type: String,
  },
  jarakRumahSekolah: {
    type: Number,
  },
  golonganDarah: {
    type: String,
  },
  riwayatPenyakit: {
    type: String,
  },
  tinggiBadan: {
    type: Number,
  },
  beratBadan: {
    type: Number,
  },
  tglIjazah: {
    type: Date,
  },
  noIjazah: {
    type: String,
  },
  tglSkhun: {
    type: Date,
  },
  noSkhun: {
    type: String,
  },
  asalSMP: {
    type: String,
  },
  kelurahanSMP: {
    type: String,
  },
  kecamatanSMP: {
    type: String,
  },
  kabkotSMP: {
    type: String,
  },
  pindahSekolahTingkat: {
    type: String,
  },
  alasanPindah: {
    type: String,
  },
  diterimaDiKelas: {
    type: String,
    default: 'X',
  },
  bidangKeahlian: {
    type: String,
    default: 'Teknologi Komputer dan Informatika',
  },
  programKeahlian: {
    type: String,
  },
  tglDiterima: {
    type: Date,
  },
  seni: {
    type: String,
  },
  olahraga: {
    type: String,
  },
  organisasi: {
    type: String,
  },
  lain: {
    type: String,
  },
  siswaId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = ProfilSiswa = mongoose.model('profilSiswa', profilSiswaSchema);
