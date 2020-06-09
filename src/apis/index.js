const express = require('express');
const basicAuth = require('../middlewares/basicAuth');
const app = express();

app.use('/admin', require('./admin'));
app.use('/auth', basicAuth, require('./auth'));

module.exports = app;
