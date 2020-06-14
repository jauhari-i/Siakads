const express = require('express');
const basicAuth = require('../middlewares/basicAuth');
const requireAuth = require('../middlewares/requireAuth');
const onlyAdmin = require('../middlewares/onlyAdmin');
const onlyTeacher = require('../middlewares/onlyTeacher');
const app = express();

app.use('/admin', require('./admin'));
app.use('/auth', basicAuth, require('./auth'));
app.use('/reset/password', require('./reset'));
app.use('/guru', [requireAuth, onlyTeacher], require('./guru'));

module.exports = app;
