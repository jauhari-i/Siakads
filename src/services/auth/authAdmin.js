const jwt = require('jsonwebtoken');
const decryptPass = require('../../config/decryptPass');
const Admin = require('../../models/Admin');
const { errorCb, successCb } = require('../../config/callback');

module.exports = authGuru = async (data, cb) => {
  let validation = [];
  !data.email &&
    validation.push({
      error: 'Email Tidak ditemukan',
    });
  !data.password &&
    validation.push({
      error: 'Password harus diisi',
    });
  validation.length > 0 && errorCb({ success: false, status: 500, validation }, cb);
  await Admin.findOne({ email: data.email })
    .then(async (admin) => {
      const isMatch = await decryptPass(data.password, admin.password);
      !isMatch &&
        errorCb(
          {
            success: false,
            status: 500,
            msg: 'Password yang anda masukkan salah',
          },
          cb
        );
      let token = jwt.sign(
        { email: admin.email, roles: admin.roles, sub: admin._id },
        'siakadsmktelkom',
        { expiresIn: '24h' }
      );
      successCb(
        {
          success: true,
          status: 200,
          msg: 'Login Berhasil',
          data: { token: token },
        },
        cb
      );
    })
    .catch((err) => {
      errorCb(
        {
          success: false,
          status: 500,
          msg: 'Email tidak valid atau tidak ditemukan',
        },
        cb
      );
    });
};
