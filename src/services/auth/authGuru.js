const jwt = require('jsonwebtoken');
const decryptPass = require('../../config/decryptPass');
const Guru = require('../../models/Guru');

module.exports = authGuru = async (data, cb) => {
  let validation = [];
  !data.nik &&
    validation.push({
      error: 'NIK Tidak ditemukan',
    });
  !data.password &&
    validation.push({
      error: 'Password harus diisi',
    });
  validation.length > 0 && cb({ success: false, status: 500, validation });

  await Guru.findOne({ nik: data.nik })
    .then(async (guru) => {
      const isMatch = await decryptPass(data.password, guru.password);
      !isMatch &&
        cb({ success: false, status: 400, msg: 'Password tidak sama' });
      if (guru.verified === 0) {
        Guru.findByIdAndUpdate(guru._id, {
          verified: 1,
          verified_at: Date.now(),
        }).then((verify) => {
          let token = jwt.sign(
            {
              email: guru.email,
              roles: guru.role,
              sub: guru._id,
            },
            'siakadsmktelkom',
            { expiresIn: '24h' }
          );
          return cb(null, {
            success: true,
            status: 200,
            data: { token: token },
            msg: 'Login berhasil',
          });
        });
      }
      let token = jwt.sign(
        {
          email: guru.email,
          roles: guru.role,
          sub: guru._id,
        },
        'siakadsmktelkom',
        { expiresIn: '24h' }
      );
      return cb(null, {
        success: true,
        status: 200,
        data: { token: token },
        msg: 'Login berhasil',
      });
    })
    .catch((err) => {
      cb({
        success: false,
        status: 500,
        msg: 'Email tidak valid atau tidak ditemukan',
      });
    });
};
