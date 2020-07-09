const express = require('express');
const app = express();
const { pelanggaranController } = require('../controllers/index');

app.post('/add/kategori', pelanggaranController.addKategori);
app.post('/add/jenis', pelanggaranController.addJenisPelanggaran);
app.post('/add/pelanggaran', pelanggaranController.addPelanggaran);

app.get('/read/kategori', pelanggaranController.readKategoriAll);
app.get('/read/jenis', pelanggaranController.readJenisPelanggaranAll);
app.get('/read/pelanggaran', pelanggaranController.readPelanggaranAll);
app.get('/read/kategori/:id', pelanggaranController.readKategoriOne);
app.get('/read/jenis/:id', pelanggaranController.readJenisPelanggaranOne);
app.get('/read/pelanggaran/siswa/:id', pelanggaranController.readPelanggaranSiswa);
app.get('/read/pelanggaran/:id', pelanggaranController.readPelanggaranOne);
app.get('/reset/pelanggaran', pelanggaranController.resetPelanggaran);

app.put('/edit/kategori/:id', pelanggaranController.editKategori);
app.put('/edit/jenis/:id', pelanggaranController.editJenisPelanggaran);
app.put('/edit/pelanggaran/:id', pelanggaranController.editPelanggaran);

app.delete('/delete/kategori/:id', pelanggaranController.deleteKategori);
app.delete('/delete/jenis/:id', pelanggaranController.deleteJenisPelanggaran);
app.delete('/delete/pelanggaran/:id', pelanggaranController.deletePelanggaran);

module.exports = app;
