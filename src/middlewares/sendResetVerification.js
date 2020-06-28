const transporter = require('../config/nodeMailer');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');

const readHtmlFile = (path, cb) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
    err ? cb(err) : cb(null, html);
  });
};

module.exports = sendVerificationEmail = async (email, nama, token, role, cb) => {
  readHtmlFile(path.join(__dirname, '../public/mail-reset.html'), (err, html) => {
    err && cb(err);
    const template = handlebars.compile(html);
    const link = `http://localhost:8080/api/reset/password/${role}/${token}`;
    const data = {
      nama: nama,
      link: link,
    };
    const htmlToSend = template(data);
    const mailOptions = {
      from: `"Admin SMK Telkom Malang" <no-reply@adminmoklet.com>`,
      to: email,
      subject: 'Lupa Kata Sandi',
      html: htmlToSend,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      err ? cb(err) : cb(null, info);
    });
  });
};
