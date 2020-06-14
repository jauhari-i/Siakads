const Admin = require('../../models/Admin');
const Guru = require('../../models/Guru');
const Siswa = require('../../models/Siswa');
const jwt = require('jsonwebtoken');
const sendResetVerification = require('../../middlewares/sendResetVerification');

module.exports = resetPass = {
  resetAdmin: async (data, cb) => {
    const errorCb = (err) => {
      return cb(err);
    };
    const successCb = (res) => {
      return cb(null, res);
    };
    !data.email && errorCb({ status: 500, success: false, msg: 'Email tidak valid' });
    await Admin.findOne({ email: data.email })
      .then(async (admin) => {
        const verificationToken = jwt.sign({ sub: admin._id }, 'resetpassadmin', {
          expiresIn: '30m',
        });
        await sendResetVerification(
          admin.email,
          admin.name,
          verificationToken,
          'admin',
          (err, info) => {
            err && errorCb({ status: 500, success: false, msg: 'Gagal mengirimkan email' });
            successCb({
              status: 200,
              success: true,
              msg: 'Berhasil mengirim email verifikasi',
              mail: {
                tujuan: info.accepted,
                mailId: info.messageId,
              },
            });
          }
        );
      })
      .catch((err) => errorCb({ status: 500, success: false, msg: 'Email tidak ditemukan' }));
  },
  resetGuru: async (data, cb) => {
    const errorCb = (err) => {
      return cb(err);
    };
    const successCb = (res) => {
      return cb(null, res);
    };
    !data.email && errorCb({ status: 500, success: false, msg: 'Email tidak valid' });
    await Guru.findOne({ email: data.email })
      .then(async (guru) => {
        const verificationToken = jwt.sign({ sub: guru._id }, 'resetpassguru', {
          expiresIn: '30m',
        });
        await sendResetVerification(
          guru.email,
          guru.name,
          verificationToken,
          'guru',
          (err, info) => {
            err && errorCb({ status: 500, success: false, msg: 'Gagal mengirimkan email' });
            successCb({
              status: 200,
              success: true,
              msg: 'Berhasil mengirim email verifikasi',
              mail: {
                tujuan: info.accepted,
                mailId: info.messageId,
              },
            });
          }
        );
      })
      .catch((err) => errorCb({ status: 500, success: false, msg: 'Email tidak ditemukan' }));
  },
  resetSiswa: async (data, cb) => {
    const errorCb = (err) => {
      return cb(err);
    };
    const successCb = (res) => {
      return cb(null, res);
    };
    !data.email && errorCb({ status: 500, success: false, msg: 'Email tidak valid' });
    await Siswa.findOne({ email: data.email })
      .then(async (siswa) => {
        const verificationToken = jwt.sign({ sub: siswa._id }, 'resetpasssiswa', {
          expiresIn: '30m',
        });
        await sendResetVerification(
          siswa.email,
          siswa.name,
          verificationToken,
          'siswa',
          (err, info) => {
            err && errorCb({ status: 500, success: false, msg: 'Gagal mengirimkan email' });
            successCb({
              status: 200,
              success: true,
              msg: 'Berhasil mengirim email verifikasi',
              mail: {
                tujuan: info.accepted,
                mailId: info.messageId,
              },
            });
          }
        );
      })
      .catch((err) => errorCb({ status: 500, success: false, msg: 'Email tidak ditemukan' }));
  },
};
