const express = require('express');
const app = express();

app.use('/admin', require('./admin'));
app.use('/auth', require('./auth'));

module.exports = app;
