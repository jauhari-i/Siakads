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
    default: '',
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
    default: '',
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
    default: '',
  },
  saudaraTiri: {
    type: String,
    default: '',
  },
  saudaraAngkat: {
    type: String,
    default: '',
  },
  statusYP: {
    type: String,
    default: 'Tidak',
  },
  bahasa: {
    type: String,
    default: '',
  },
  alamatMalang: {
    type: String,
    default: '',
  },
  rt: {
    type: Number,
  },
  rw: {
    type: Number,
  },
  dusun: {
    type: String,
    default: '',
  },
  desaKel: {
    type: String,
    default: '',
  },
  kecamatan: {
    type: String,
    default: '',
  },
  kodePos: {
    type: Number,
  },
  jenisTinggal: {
    type: String,
    default: '',
  },
  transportasi: {
    type: String,
    default: '',
  },
  tlpMalang: {
    type: String,
    default: '',
  },
  tinggalDengan: {
    type: String,
    default: '',
  },
  jarakRumahSekolah: {
    type: Number,
    default: 0,
  },
  golonganDarah: {
    type: String,
    default: '',
  },
  riwayatPenyakit: {
    type: String,
    default: '',
  },
  tinggiBadan: {
    type: Number,
    default: 0,
  },
  beratBadan: {
    type: Number,
    default: 0,
  },
  tglIjazah: {
    type: Date,
  },
  noIjazah: {
    type: String,
    default: '',
  },
  tglSkhun: {
    type: Date,
  },
  noSkhun: {
    type: String,
    default: '',
  },
  asalSMP: {
    type: String,
    default: '',
  },
  kelurahanSMP: {
    type: String,
    default: '',
  },
  kecamatanSMP: {
    type: String,
    default: '',
  },
  kabkotSMP: {
    type: String,
    default: '',
  },
  pindahSekolahTingkat: {
    type: String,
    default: '',
  },
  alasanPindah: {
    type: String,
    default: '',
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
    default: '',
  },
  tglDiterima: {
    type: Date,
  },
  seni: {
    type: String,
    default: '',
  },
  olahraga: {
    type: String,
    default: '',
  },
  organisasi: {
    type: String,
    default: '',
  },
  lain: {
    type: String,
    default: '',
  },
  fotoSmp: {
    type: String,
    default:
      'https://res.cloudinary.com/siakadsmktelkommalang/image/upload/v1591678783/269-2697881_computer-icons-user-clip-art-transparent-png-icon_yi1dtt.png',
  },
  fotoSmk: {
    type: String,
    default:
      'https://res.cloudinary.com/siakadsmktelkommalang/image/upload/v1591678783/269-2697881_computer-icons-user-clip-art-transparent-png-icon_yi1dtt.png',
  },
  siswaId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = ProfilSiswa = mongoose.model('profilSiswa', profilSiswaSchema);
