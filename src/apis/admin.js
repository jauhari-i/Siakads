const express = require('express');
const app = express();

const adminController = require('../controllers/adminController');

app.post('/register/admin', adminController.registerAdmin);
app.post('/register/guru', adminController.registerGuru);
app.post('/register/siswa', adminController.registerSiswa);
app.post('/register/kelas', adminController.registerKelas);

app.get('/read/guru', adminController.readGuruAll);
app.get('/read/guru/:id', adminController.readGuruOne);
app.get('/read/kelas', adminController.readKelasAll);
app.get('/read/kelas/:id', adminController.readKelasOne);
app.get('/read/siswa', adminController.readSiswaAll);
app.get('/read/siswa/:id', adminController.readSiswaOne);
app.get('/read/ayah/siswa/:id', adminController.readAyahSiswa);
app.get('/read/ibu/siswa/:id', adminController.readIbuSiswa);
app.get('/read/wali/siswa/:id', adminController.readWaliSiswa);

module.exports = app;
