const Admin = require('../../models/Admin');
const encryptPass = require('../../config/encryptPass');
const generate = require('generate-password');
const sendEmailAdmin = require('../../middlewares/sendPassAdmin');

module.exports = registerAdmin = async (data, cb) => {
  let validasi = [];
  !data.email && validasi.push({ error: 'Email diperlukan' });
  !data.name && validasi.push({ error: 'Nama diperlukan' });
  validasi.length > 0 && cb({ success: false, status: 500, validasi });
  let password = generate.generate({
    length: 10,
    uppercase: false,
    numbers: true,
  });
  let encPass = await encryptPass(password, 10);
  await Admin.create({
    name: data.name,
    email: data.email,
    password: encPass,
  })
    .then((admin) => {
      sendEmailAdmin(admin.email, admin.name, password, (err, info) => {
        if (err) {
          return cb({
            success: true,
            status: 500,
            msg: 'Gagal mengirimkan Email',
          });
        } else {
          return cb({
            success: true,
            status: 200,
            msg: admin.email + ' Berhasil Terdaftar',
          });
        }
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        return cb({
          success: false,
          status: 500,
          msg: 'Email telah dipakai',
        });
      }
      return cb({
        success: false,
        status: 500,
        error: err,
      });
    });
};
