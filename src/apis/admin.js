const express = require('express');
const app = express();
const parser = require('../middlewares/uploadImgProfile');

const { adminController } = require('../controllers/index');

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
app.get('/read/ijazah/siswa/:id', adminController.readIjazahSiswa);
app.get('/read/tunggakan', adminController.readTunggakanAll);
app.get('/read/tunggakan/siswa/:id', adminController.readTunggakanOne);

app.put('/edit/guru/:id', parser.single('img'), adminController.editGuru);
app.put('/edit/siswa/:id', parser.single('img'), adminController.editSiswa);
app.put('/edit/ayah/siswa/:id', adminController.editAyahSiswa);
app.put('/edit/ibu/siswa/:id', adminController.editIbuSiswa);
app.put('/edit/wali/siswa/:id', adminController.editWaliSiswa);
app.put('/edit/ijzah/siswa/:id', adminController.editIjazahSiswa);
app.put('/edit/tunggakan/siswa/:id', adminController.editTunggakanSiswa);

app.delete('/delete/guru/:id', adminController.deleteGuru);
app.delete('/delete/kelas/:id', adminController.deleteKelas);
app.delete('/delete/siswa/:id', adminController.deleteSiswa);

// service
app.get('/register/siswakelas/:siswa/:kelas', adminController.registerKelasSiswa);

module.exports = app;
