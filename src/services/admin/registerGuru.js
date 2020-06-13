const encryptPass = require('../../config/encryptPass');
const generator = require('generate-password');
const defaultPass = require('../../constants/passwordDefault');
const sendVerificationEmail = require('../../middlewares/sendPassEmail');

const Guru = require('../../models/Guru');
const ProfilGuru = require('../../models/ProfilGuru');

module.exports = registerGuru = async (data, cb) => {
  let validation = [];

  if (!data.nik) {
    validation.push({
      error: 'NIK tidak boleh kosong',
    });
  }
  if (!data.name) {
    validation.push({
      error: 'Nama tidak boleh kosong',
    });
  }
  if (!data.email) {
    validation.push({
      error: 'Email tidak boleh kosong',
    });
  }
  validation.length > 0 &&
    cb({
      success: false,
      status: 500,
      message: 'There is empty Data',
      validation,
    });
  const password = generator.generate({
    length: 10,
    uppercase: false,
    numbers: true,
  });
  const encPass = await encryptPass(password, 10);
  await Guru.create({
    name: data.name,
    nik: data.nik,
    email: data.email,
    password: encPass,
  })
    .then((guru) => {
      ProfilGuru.create({ guruId: guru._id })
        .then((created) => {
          sendVerificationEmail(
            data.email,
            data.name,
            password,
            (err, info) => {
              err && cb(err);
              cb({
                success: true,
                status: 200,
                msg: 'Guru berhasil terdaftar',
                more: info,
              });
            }
          );
        })
        .catch((err) => {
          return cb({ success: false, status: 500, error: err });
        });
    })
    .catch((err) => {
      err.code === 11000 &&
        cb({
          success: false,
          status: 500,
          msg: 'Email atau NIK telah dipakai',
        });
      return cb({ success: false, status: 500, error: err });
    });
};
