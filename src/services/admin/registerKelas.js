const Kelas = require('../../models/Kelas');
const Guru = require('../../models/Guru');

module.exports = registerKelas = async (data, cb) => {
  const errorCb = (err) => {
    return cb(err);
  };
  const successCb = (data) => {
    return cb(null, data);
  };

  let validation = [];
  !data.namaKelas && validation.push({ error: 'Nama kelas diperlukan' });
  !data.jurusan && validation.push({ errro: 'Jurusan diperlukan' });
  !data.waliKelas && validation.push({ error: 'Wali Kelas diperlukan' });
  !data.tingkat && validation.push({ error: 'Tingkat kelas diperlukan' });
  validation.length > 0 && errorCb({ success: false, status: 500, msg: 'Input error', validation });

  await Guru.findById(data.waliKelas)
    .then(async (guru) => {
      guru.verified !== 1 &&
        errorCb({
          success: false,
          status: 500,
          msg: 'Akun belum terverifikasi',
        });
      await Kelas.create({
        namaKelas: data.namaKelas,
        jurusan: data.jurusan,
        waliKelas: guru._id,
        tingkat: data.tingkat,
      })
        .then((kelas) => {
          successCb({
            success: true,
            status: 200,
            msg: kelas.namaKelas + ' Berhasil ditambahkan',
            data: {
              waliKelas: guru.name,
            },
          });
        })
        .catch((err) =>
          errorCb({
            success: false,
            status: 500,
            msg: 'Guru telah terdaftar sebagai wali kelas lain',
          })
        );
    })
    .catch((err) =>
      errorCb({
        success: false,
        status: 500,
        msg: 'Wali kelas tidak valid atau belum terverifikasi',
      })
    );
};
