const transporter = require('../config/nodeMailer');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');

const readHtmlFile = (path, cb) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
    err ? cb(err) : cb(null, html);
  });
};

module.exports = sendVerificationEmail = async (email, nama, password, cb) => {
  readHtmlFile(path.join(__dirname, '../public/mail.html'), (err, html) => {
    err && cb(err);
    const template = handlebars.compile(html);
    const data = {
      nama: nama,
      password: password,
    };
    const htmlToSend = template(data);
    const mailOptions = {
      from: `"Admin SMK Telkom Malang" <no-reply@adminmoklet.com>`,
      to: email,
      subject: 'Kata Sandi Akun Siakad Guru',
      html: htmlToSend,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      err ? cb(err) : cb(null, info);
    });
  });
};
