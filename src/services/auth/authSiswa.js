const jwt = require('jsonwebtoken');
const decryptPass = require('../../config/decryptPass');
const Siswa = require('../../models/Siswa');

module.exports = loginSiswa = async (data, cb) => {
  const errorCb = (err) => {
    return cb(err);
  };

  let validation = [];
  !data.email && validation.push({ error: 'Email harus diisi!' });
  !data.password && validation.push({ error: 'Password harus diisi!' });
  validation.length > 0 && errorCb({ success: false, status: 500, validation });

  await Siswa.findOne({ email: data.email })
    .then(async (siswa) => {
      const matchPass = decryptPass(data.password, siswa.password);
      !matchPass &&
        errorCb({ success: false, status: 500, msg: 'Password salah' });

      const token = jwt.sign(
        {
          email: siswa.email,
          roles: siswa.roles,
          sub: siswa._id,
        },
        'siakadsmktelkom',
        { expiresIn: '24h' }
      );
      cb(null, {
        success: true,
        status: 200,
        msg: 'Login berhasil',
        data: { token: token },
      });
    })
    .catch((err) =>
      errorCb({ success: false, status: 500, msg: 'Email tidak ditemukan' })
    );
};
