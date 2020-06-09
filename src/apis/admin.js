const express = require('express');
const app = express();

const adminController = require('../controllers/adminController');

app.post('/register/guru', adminController.registerGuru);

module.exports = app;
