const jwt = require('jsonwebtoken');
const decryptPass = require('../../config/decryptPass');
const Admin = require('../../models/Admin');

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
  validation.length > 0 && cb({ success: false, status: 500, validation });
  await Admin.findOne({ email: data.email }).then(async (admin) => {
    const isMatch = await decryptPass(data.password, admin.password);
    if (!isMatch)
      return cb({
        success: false,
        status: 500,
        msg: 'Password yang anda masukkan salah',
      });
    let token = jwt.sign(
      { email: admin.email, roles: admin.roles, sub: admin._id },
      'siakadsmktelkom',
      { expiresIn: '24h' }
    );
    cb(null, {
      success: true,
      status: 200,
      msg: 'Login Berhasil',
      data: { token: token },
    });
  });
};
