const Kategori = require('../../models/Kategori');
const Pelanggaran = require('../../models/Pelanggaran');
const JenisPelanggaran = require('../../models/JenisPelanggaran');
const Siswa = require('../../models/Siswa');
const { errorCb, successCb } = require('../../config/callback');

module.exports = pelanggaranInstance = {
  addKategori: async (data, cb) => {
    let validasi = [];

    !data.namaKategori && validasi.push({ error: 'Nama Kategori Tidak Boleh Kosong' });
    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input Error', error: validasi }, cb);

    await Kategori.create({ namaKategori: data.namaKategori })
      .then((kat) => {
        successCb({ status: 200, success: true, msg: 'Kategori ditambahkan', data: kat }, cb);
      })
      .catch((err) => {
        errorCb({ status: 500, success: false, msg: 'Nama Kategori Telah Dipakai', err }, cb);
      });
  },
  addJenisPelanggaran: async (data, cb) => {
    let validasi = [];

    !data.namaPelanggaran && validasi.push({ error: 'Nama Pelanggaran tidak boleh kosong' });
    !data.kategori && validasi.push({ error: 'Kategori tidak boleh kosong' });
    !data.poin && validasi.push({ error: 'Poin tidak boleh kosong' });
    !data.deskripsi && validasi.push({ error: 'Deskripsi Pelanggaran tidak boleh kosong' });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input Error', error: validasi }, cb);

    await Kategori.findById(data.kategori)
      .then(async (kategori) => {
        JenisPelanggaran.create({
          namaPelanggaran: data.namaPelanggaran,
          kategori: kategori.namaKategori,
          deskripsi: data.deskripsi,
          poin: data.poin,
        })
          .then((jenis) => {
            successCb(
              {
                status: 200,
                success: true,
                msg: 'Jenis Pelanggaran Telah Ditambahkan',
                data: jenis,
              },
              cb
            );
          })
          .catch((err) => {
            errorCb(
              {
                status: 500,
                success: false,
                msg: 'Internal server error',
              },
              cb
            );
          });
      })
      .catch((err) => {
        errorCb(
          {
            status: 500,
            success: false,
            msg: 'Kategori tidak ditemukan',
            err,
          },
          cb
        );
      });
  },
  addPelanggaran: async (id, data, cb) => {},
  readKategoriAll: async (cb) => {},
  readJenisPelanggaranAll: async (cb) => {},
  readPelanggaranAll: async (cb) => {},
  readKategoriOne: async (id, cb) => {},
  readJenisPelanggaranOne: async (id, cb) => {},
  readPelanggaranOne: async (id, cb) => {},
  editKategori: async (id, data, cb) => {},
  editJenisPelanggaran: async (id, data, cb) => {},
  editPelanggaran: async (id, data, cb) => {},
  deleteKategori: async (id, cb) => {},
  deleteJenisPelanggaran: async (id, cb) => {},
  deletePelanggaran: async (id, cb) => {},
  resetPelanggaran: async (cb) => {
    await Pelanggaran.deleteMany({})
      .then((reset) =>
        successCb(
          { status: 200, success: true, msg: 'Pelanggaran berhasil direset', data: reset },
          cb
        )
      )
      .catch((err) => errorCb({ status: 500, success: false, err: err }, cb));
  },
};
