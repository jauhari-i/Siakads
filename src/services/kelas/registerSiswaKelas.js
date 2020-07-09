const Siswa = require('../../models/Siswa');
const Kelas = require('../../models/Kelas');
const { errorCb, successCb } = require('../../config/callback');

module.exports = registerSiswaKelas = async (data, cb) => {
  const kelasD = await Kelas.findById(data.idKelas);
  !kelasD && errorCb({ status: 404, success: false, msg: 'Id Kelas Tidak Valid' }, cb);
  const siswaD = await Siswa.findById(data.idSiswa);
  !siswaD && errorCb({ status: 404, success: false, msg: 'Id Siswa Tidak Valid' }, cb);

  await Siswa.update({ _id: siswaD._id }, { kelas: kelasD.namaKelas })
    .then((siswa) => {
      successCb({ status: 200, success: true, msg: 'Registrasi Kelas Berhasil' }, cb);
    })
    .catch((err) => {
      errorCb({ status: 500, success: false, err, msg: 'Internal server error' }, cb);
    });
};
