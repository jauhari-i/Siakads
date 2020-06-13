const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();

module.exports = app.use(
  basicAuth({
    users: { siakad: 'smktelkommalang2020' },
    challenge: true,
    unauthorizedResponse: getUnauthorizedResponse,
  })
);

function getUnauthorizedResponse(req) {
  return req.auth
    ? 'Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected'
    : 'No credentials provided';
}
