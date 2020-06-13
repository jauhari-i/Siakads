const decryptPass = require('../../config/decryptPass');
const encryptPass = require('../../config/encryptPass');
const Guru = require('../../models/Guru');

module.exports = updatePasswordGuru = async (data, cb) => {
  const errorCb = (err) => {
    return cb(err);
  };

  let validation = [];
  !data.oldPass &&
    validation.push({ error: 'Kata sandi lama tidak boleh kosong' });
  !data.newPass &&
    validation.push({ error: 'Kata sandi baru tidak boleh kosong' });
  !data.newPassConfirm &&
    validation.push({ error: 'Konfirmasi kata sandi anda' });
  data.newPass !== data.newPassConfirm &&
    validation.push({ error: 'Kata sandi baru harus sama' });
  validation.length > 0 &&
    errorCb({ success: false, status: 500, msg: 'input error', validation });

  await Guru.findById(data.id)
    .then(async (guru) => {
      const isMatch = await decryptPass(data.oldPass, guru.password);
      !isMatch &&
        errorCb({
          success: false,
          status: 500,
          msg: 'Kata sandi lama tidak sama',
        });
      const encPass = await encryptPass(data.newPass, 10);
      await Guru.findByIdAndUpdate(data.id, { password: encPass })
        .then((newGuru) => {
          cb({
            success: true,
            status: 200,
            msg: 'Kata sandi ' + newGuru.name + ' berhasil diubah',
          });
        })
        .catch((err) => {
          errorCb({
            success: false,
            status: 500,
            msg: 'Internal server error',
          });
        });
    })
    .catch((err) => {
      errorCb({
        success: false,
        status: 500,
        msg: 'Data guru tidak ditemukan',
      });
    });
};
