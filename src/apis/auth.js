const express = require('express');
const app = express();

const authController = require('../controllers/authController');

app.post('/login/guru', authController.authGuru);

module.exports = app;
