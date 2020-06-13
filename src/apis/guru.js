const express = require('express');
const app = express();
const guruController = require('../controllers/guruController');

app.put('/update/password/:id', guruController.updatePassword);

module.exports = app;
