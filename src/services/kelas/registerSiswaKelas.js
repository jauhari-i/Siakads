const Siswa = require('../../models/Siswa');
const Kelas = require('../../models/Kelas');
const { errorCb, successCb } = require('../../config/callback');

module.exports = registerSiswaKelas = async (data, cb) => {
  try {
    const kelasD = await Kelas.findById(data.idKelas);
    const siswaD = await Siswa.findById(data.idSiswa);

    await Siswa.update({ _id: siswaD._id }, { kelas: kelasD.namaKelas })
      .then((siswa) => {
        successCb({ status: 200, success: true, msg: 'Registrasi Kelas Berhasil' }, cb);
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    errorCb({ status: 500, success: false, err, msg: 'Internal server error' }, cb);
  }
};
