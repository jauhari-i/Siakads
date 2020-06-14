const express = require('express');
const app = express();
const authController = require('../controllers/authController');

app.get('/admin/:token', authController.changeAdmin);
app.get('/guru/:token', authController.changeGuru);
app.get('/siswa/:token', authController.changeSiswa);

module.exports = app;
