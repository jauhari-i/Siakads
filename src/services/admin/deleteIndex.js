const Guru = require('../../models/Guru');
const Kelas = require('../../models/Kelas');
const Siswa = require('../../models/Siswa');
const ProfilSiswa = require('../../models/ProfilSiswa');
const ProfilGuru = require('../../models/ProfilGuru');
const AyahSiswa = require('../../models/AyahSiswa');
const IbuSiswa = require('../../models/IbuSiswa');
const WaliSiswa = require('../../models/WaliSiswa');
const IjazahSiswa = require('../../models/IjazahSiswa');

const errorCb = (err, cb) => {
  return cb(err);
};

const successCb = (data, cb) => {
  return cb(null, data);
};

module.exports = deleteInstance = {
  deleteGuru: async (id, cb) => {
    await Guru.findByIdAndRemove(id)
      .then(async (deleted) => {
        await ProfilGuru.findOneAndRemove({ guruId: id })
          .then((del) => {
            Kelas.findOneAndUpdate({ waliKelas: id }, { waliKelas: '' })
              .then((wali) => {
                successCb({ status: 200, success: true, msg: 'Guru telah dihapus' }, cb);
              })
              .catch((err) => {
                successCb({ status: 200, success: true, msg: 'Guru telah dihapus' }, cb);
              });
          })
          .catch((err) => {
            errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
          });
      })
      .catch((err) => {
        errorCb({ status: 500, success: false, msg: 'Id tidak ditemukan' }, cb);
      });
  },
  deleteKelas: async (id, cb) => {
    await Kelas.findByIdAndRemove(id)
      .then((kelas) => {
        Siswa.find({ kelasId: id })
          .then((siswa) => {
            let siswaDummy = [];
            siswa.map((item) => {
              Siswa.findByIdAndUpdate(item._id, { kelasId: '' })
                .then((updated) => {
                  siswaDummy.push({ tes: 'tes', updated });
                })
                .catch((err) => {
                  return errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
                });
              if (siswaDummy.length === siswa.length) {
                return successCb({ status: 200, success: true, msg: 'Kelas Telah dihapus' }, cb);
              }
            });
          })
          .catch((err) => {
            successCb({ status: 200, success: true, msg: 'Kelas Telah dihapus' }, cb);
          });
      })
      .catch((err) => {
        errorCb({ status: 500, success: false, msg: 'Id tidak ditemukan' }, cb);
      });
  },
  deleteSiswa: async (id, cb) => {
    await Siswa.findByIdAndRemove(id)
      .then(async (del) => {
        await ProfilSiswa.findOneAndRemove({ siswaId: id });
        await AyahSiswa.findOneAndRemove({ siswaId: id });
        await IbuSiswa.findOneAndRemove({ siswaId: id });
        await WaliSiswa.findOneAndRemove({ siswaId: id });
        await IjazahSiswa.findOneAndRemove({ siswaId: id });
        successCb({ status: 200, success: true, msg: 'Siswa telah dihapus' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 500, success: false, msg: 'Id tidak ditemukan' }, cb);
      });
  },
};
