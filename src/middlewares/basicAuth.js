const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();

module.exports = app.use(
  basicAuth({
    users: { siakads: 'telkommalang2020' },
    challenge: true,
  })
);
