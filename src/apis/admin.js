const express = require('express');
const app = express();

const adminController = require('../controllers/adminController');

app.get('/testing', (req, res) => res.json('haasjdkasdnk'));
app.post('/register/guru', adminController.registerGuru);

module.exports = app;
