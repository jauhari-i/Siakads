const Kategori = require('../../models/Kategori');
const Pelanggaran = require('../../models/Pelanggaran');
const JenisPelanggaran = require('../../models/JenisPelanggaran');
const Siswa = require('../../models/Siswa');
const Guru = require('../../models/Guru');
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
  addPelanggaran: async (data, cb) => {
    try {
      const siswaD = await Siswa.findById(data.idSiswa);
      const jenisP = await JenisPelanggaran.findById(data.idJenisP);
      const guruD = await Guru.findById(data.idGuru);

      const jenis = {
        _id: jenisP._id,
        namaPelanggaran: jenisP.namaPelanggaran,
        kategori: jenisP.kategori,
        deskripsi: jenisP.deskripsi,
        poin: jenisP.poin,
      };

      await Pelanggaran.create({
        siswa: siswaD.name,
        jenis: jenis,
        guru: guruD.name,
      })
        .then((pelanggaran) => {
          successCb({ status: 200, success: true, msg: 'Pelanggaran berhasil ditambahkan' }, cb);
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      errorCb({ status: 500, success: false, msg: 'Internal server error', err }, cb);
    }
  },
  readKategoriAll: async (cb) => {
    try {
      const kategoriD = await Kategori.find();
      const kat = kategoriD.map((k) => ({
        ids: k._id,
        namaKategori: k.namaKategori,
      }));
      successCb({ status: 200, success: true, data: kat }, cb);
    } catch (err) {
      errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
    }
  },
  readJenisPelanggaranAll: async (cb) => {
    try {
      const jenisP = await JenisPelanggaran.find();
      const jenis = jenisP.map((j) => ({
        ids: j._id,
        namaPelanggaran: j.namaPelanggaran,
        kategori: j.namaKategori,
        deskripsi: j.deskripsi,
        poin: j.poin,
      }));
      successCb({ status: 200, success: true, data: jenis }, cb);
    } catch (err) {
      errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
    }
  },
  readPelanggaranAll: async (cb) => {
    try {
      const pelanggaranD = await Pelanggaran.find();
      const pel = pelanggaranD.map((p) => ({
        ids: p._id,
        siswa: p.siswa,
        jenis: p.jenis,
        guru: p.guru,
        tgl: p.created_at,
      }));
      successCb({ status: 200, success: true, data: pel }, cb);
    } catch (err) {
      errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
    }
  },
  readKategoriOne: async (id, cb) => {
    try {
      const kategoriD = await Kategori.findById(id);
      successCb(
        {
          status: 200,
          success: true,
          data: {
            ids: kategoriD._id,
            namaKategori: kategoriD.namaKategori,
          },
        },
        cb
      );
    } catch (err) {
      errorCb({ status: 404, success: false, msg: 'Kategori tidak ditemukan' }, cb);
    }
  },
  readJenisPelanggaranOne: async (id, cb) => {
    try {
      const jenisD = await JenisPelanggaran.findById(id);
      successCb(
        {
          status: 200,
          success: true,
          data: {
            ids: jenisD._id,
            namaPelanggaran: jenisD.namaPelanggaran,
            kategori: jenisD.kategori,
            deskripsi: jenisD.deskripsi,
            poin: jenisD.poin,
          },
        },
        cb
      );
    } catch (err) {
      errorCb({ status: 404, success: true, msg: 'Jenis Pelanggaran tidak ditemukan' }, cb);
    }
  },
  readPelanggaranOne: async (id, cb) => {
    try {
      const pelanggaranD = await Pelanggaran.findById(id);
      successCb(
        {
          status: 200,
          success: true,
          data: {
            ids: pelanggaranD._id,
            siswa: pelanggaranD.siswa,
            guru: pelanggaranD.guru,
            jenis: pelanggaranD.jenis,
            tgl: pelanggaranD.created_at,
          },
        },
        cb
      );
    } catch (err) {
      errorCb({ status: 404, success: false, msg: 'Pelanggaran tidak ditemukan' }, cb);
    }
  },
  readPelanggaranSiswa: async (id, cb) => {
    try {
      const siswa = await Siswa.findById(id);
      const pelanggaranSiswa = await Pelanggaran.find({ siswa: siswa.name });
      let poin = 0;
      let pel = [];
      pelanggaranSiswa.map((item) => {
        pel.push({
          ids: item._id,
          siswa: item.siswa,
          jenis: item.jenis,
          guru: item.guru,
          tgl: item.created_at,
        });
        poin += item.jenis.poin;
        if (pel.length === pelanggaranSiswa.length) {
          return successCb({ status: 200, success: true, data: { pellangaran, poin } }, cb);
        }
      });
    } catch (err) {
      errorCb({ status: 404, success: false, msg: 'Siswa tidak ditemukan' }, cb);
    }
  },
  editKategori: async (id, data, cb) => {
    let validasi = [];

    !data.namaKategori && validasi.push({ error: 'Nama Kategori Tidak Boleh Kosong' });
    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input Error', error: validasi }, cb);

    await Kategori.findByIdAndUpdate(id, { namaKategori: data.namaKategori })
      .then((up) => {
        successCb({ status: 200, success: true, msg: 'Kategori telah diperbarui' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 500, success: false, msg: 'Internal server error', err }, cb);
      });
  },
  editJenisPelanggaran: async (id, data, cb) => {
    let validasi = [];

    !data.namaPelanggaran && validasi.push({ error: 'Nama Pelanggaran tidak boleh kosong' });
    !data.kategori && validasi.push({ error: 'Kategori tidak boleh kosong' });
    !data.poin && validasi.push({ error: 'Poin tidak boleh kosong' });
    !data.deskripsi && validasi.push({ error: 'Deskripsi Pelanggaran tidak boleh kosong' });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input Error', error: validasi }, cb);

    await Kategori.findById(data.kategori)
      .then(async (kategori) => {
        await JenisPelanggaran.findByIdAndUpdate(id, {
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
                msg: 'Jenis Pelanggaran Telah diperbarui',
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
  editPelanggaran: async (id, data, cb) => {
    try {
      const jenisP = await JenisPelanggaran.findById(data.idJenisP);
      const guruD = await Guru.findById(data.idGuru);

      const jenis = {
        _id: jenisP._id,
        namaPelanggaran: jenisP.namaPelanggaran,
        kategori: jenisP.kategori,
        deskripsi: jenisP.deskripsi,
        poin: jenisP.poin,
      };

      await Pelanggaran.updateOne(
        { _id: id },
        {
          jenis: jenis,
          guru: guruD.name,
        }
      )
        .then((pelanggaran) => {
          successCb({ status: 200, success: true, msg: 'Pelanggaran berhasil diperbarui' }, cb);
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      errorCb({ status: 500, success: false, msg: 'Internal server error', error }, cb);
    }
  },
  deleteKategori: async (id, cb) => {
    try {
      const kat = await Kategori.findById(id);
      await Kategori.findByIdAndRemove(kat._id)
        .then(async (del) => {
          await JenisPelanggaran.find({ kategori: kat.namaKategori })
            .then(async (jp) => {
              const jenis = jp.map((j) => ({
                _id: j._id,
                namaPelanggaran: j.namaPelanggaran,
                kategori: j.kategori,
                deskripsi: j.deskripsi,
                poin: j.poin,
              }));
              await JenisPelanggaran.deleteMany({ kategori: kat.namaKategori });
              await Pelanggaran.deleteMany({ jenis: jenis });
              successCb({ status: 200, success: true, msg: 'Kategori telah dihapus' }, cb);
            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      errorCb({ status: 500, success: false, msg: 'Internal server error', err }, cb);
    }
  },
  deleteJenisPelanggaran: async (id, cb) => {
    try {
      const jenis = await JenisPelanggaran.findById(id);
      await JenisPelanggaran.findByIdAndRemove(id)
        .then(async (del) => {
          const jenisD = {
            _id: jenis._id,
            namaPelanggaran: jenis.namaPelanggaran,
            kategori: jenis.kategori,
            deskripsi: jenis.deskripsi,
            poin: jenis.poin,
          };
          await Pelanggaran.deleteMany({ jenis: jenisD })
            .then((del) => {
              successCb({ status: 200, success: true, msg: 'Jenis pelanggaran telah dihapus' }, cb);
            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
        });
    } catch (error) {
      errorCb({ status: 404, success: true, msg: 'Jenis Pelanggaran tidak ditemukan' }, cb);
    }
  },
  deletePelanggaran: async (id, cb) => {
    await Pelanggaran.findByIdAndRemove(id)
      .then((del) => {
        successCb({ status: 200, success: true, msg: 'Pelanggaran telah dihapus' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 500, success: false, msg: 'Id Pelanggaran tidak valid' }, cb);
      });
  },
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
