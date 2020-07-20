const Admin = require('../../models/Admin');
const Guru = require('../../models/Guru');
const Siswa = require('../../models/Siswa');
const Token = require('../../models/Token');
const jwt = require('jsonwebtoken');
const generate = require('generate-password');
const encryptPassword = require('../../config/encryptPass');
const sendPassReset = require('../../middlewares/sendPassReset');

module.exports = changePass = {
  changeAdmin: async (token, cb) => {
    const errorCb = (err) => {
      return cb(err);
    };
    const successCb = (res) => {
      return cb(null, res);
    };
    !token && errorCb({ success: false, status: 500, msg: 'Kode tidak ditemukan' });
    await Token.findOne({ token: token })
      .then(async (data) => {
        await jwt.verify(data.token, 'resetpassadmin', async (err, decoded) => {
          if (err) {
            Token.findOneAndRemove({ token: token })
              .then((deleted) =>
                errorCb({
                  success: false,
                  status: 500,
                  msg: 'Kode tidak valid atau masa aktif kode telah habis',
                })
              )
              .catch((err) =>
                errorCb({
                  success: false,
                  status: 500,
                  msg: 'Kode tidak valid atau masa aktif kode telah habis',
                })
              );
          }
          const id = decoded.sub;
          const basePass = generate.generate({
            length: 10,
            lowercase: true,
            number: true,
            uppercase: false,
          });
          const encPass = await encryptPassword(basePass, 10);
          await Admin.findByIdAndUpdate(id, { password: encPass })
            .then(async (admin) => {
              await sendPassReset(admin.email, admin.name, basePass, (err, info) => {
                err && errorCb({ status: 500, success: false, msg: 'Gagal mengirimkan email' });
                Token.findOneAndRemove({ token: token })
                  .then((token) => {
                    successCb({
                      status: 200,
                      success: true,
                      msg: 'Berhasil mengirim email, silahkan cek email anda',
                      mail: {
                        tujuan: info.accepted,
                        mailId: info.messageId,
                      },
                    });
                  })
                  .catch((err) =>
                    errorCb({ status: 500, success: false, msg: 'Internal server error' })
                  );
              });
            })
            .catch((err) => errorCb({ status: 500, success: false, msg: 'Internal server error' }));
        });
      })
      .catch((err) => errorCb({ success: false, status: 500, msg: 'Kode tidak valid' }));
  },
  changeGuru: async (token, cb) => {
    const errorCb = (err) => {
      return cb(err);
    };
    const successCb = (res) => {
      return cb(null, res);
    };
    !token && errorCb({ success: false, status: 500, msg: 'Kode tidak ditemukan' });
    await Token.findOne({ token: token })
      .then(async (data) => {
        await jwt.verify(data.token, 'resetpassguru', async (err, decoded) => {
          if (err) {
            Token.findOneAndRemove({ token: token })
              .then((deleted) =>
                errorCb({
                  success: false,
                  status: 500,
                  msg: 'Kode tidak valid atau masa aktif kode telah habis',
                })
              )
              .catch((err) =>
                errorCb({
                  success: false,
                  status: 500,
                  msg: 'Kode tidak valid atau masa aktif kode telah habis',
                })
              );
          }
          const id = decoded.sub;
          const basePass = generate.generate({
            lowercase: true,
            uppercase: false,
            number: true,
            length: 10,
          });
          const encPass = await encryptPassword(basePass, 10);
          await Guru.findByIdAndUpdate(id, { password: encPass })
            .then(async (guru) => {
              await sendPassReset(guru.email, guru.name, basePass, (err, info) => {
                err && errorCb({ status: 500, success: false, msg: 'Gagal mengirimkan email' });
                Token.findOneAndRemove({ token: token })
                  .then((token) => {
                    successCb({
                      status: 200,
                      success: true,
                      msg: 'Berhasil mengirim email, silahkan cek email anda',
                      mail: {
                        tujuan: info.accepted,
                        mailId: info.messageId,
                      },
                    });
                  })
                  .catch((err) =>
                    errorCb({ status: 500, success: false, msg: 'Internal server error' })
                  );
              });
            })
            .catch((err) => errorCb({ status: 500, success: false, msg: 'Internal server error' }));
        });
      })
      .catch((err) => errorCb({ success: false, status: 500, msg: 'Kode tidak valid' }));
  },
  changeSiswa: async (token, cb) => {
    const errorCb = (err) => {
      return cb(err);
    };
    const successCb = (res) => {
      return cb(null, res);
    };
    !token && errorCb({ success: false, status: 500, msg: 'Kode tidak ditemukan' });
    await Token.findOne({ token: token })
      .then(async (data) => {
        await jwt.verify(data.token, 'resetpasssiswa', async (err, decoded) => {
          if (err) {
            Token.findOneAndRemove({ token: token })
              .then((deleted) =>
                errorCb({
                  success: false,
                  status: 500,
                  msg: 'Kode tidak valid atau masa aktif kode telah habis',
                })
              )
              .catch((err) =>
                errorCb({
                  success: false,
                  status: 500,
                  msg: 'Kode tidak valid atau masa aktif kode telah habis',
                })
              );
          }
          const id = decoded.sub;
          const basePass = generate.generate({
            lowercase: true,
            uppercase: false,
            number: true,
            length: 10,
          });
          const encPass = await encryptPassword(basePass, 10);
          await Siswa.findByIdAndUpdate(id, { password: encPass })
            .then(async (siswa) => {
              await sendPassReset(siswa.email, siswa.name, basePass, (err, info) => {
                err && errorCb({ status: 500, success: false, msg: 'Gagal mengirimkan email' });
                Token.findOneAndRemove({ token: token })
                  .then((token) => {
                    successCb({
                      status: 200,
                      success: true,
                      msg: 'Berhasil mengirim email, silahkan cek email anda',
                      mail: {
                        tujuan: info.accepted,
                        mailId: info.messageId,
                      },
                    });
                  })
                  .catch((err) =>
                    errorCb({ status: 500, success: false, msg: 'Internal server error' })
                  );
              });
            })
            .catch((err) => errorCb({ status: 500, success: false, msg: 'Internal server error' }));
        });
      })
      .catch((err) => errorCb({ success: false, status: 500, msg: 'Kode tidak valid' }));
  },
};