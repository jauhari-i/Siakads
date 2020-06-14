const express = require('express');
const app = express();
const authController = require('../controllers/authController');

app.post('/login/admin', authController.authAdmin);
app.post('/login/guru', authController.authGuru);
app.post('/login/siswa', authController.authSiswa);
app.post('/reset/admin', authController.resetAdmin);
app.post('/reset/guru', authController.resetGuru);
app.post('/reset/siswa', authController.resetSiswa);

module.exports = app;
