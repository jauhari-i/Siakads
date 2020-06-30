const Guru = require('../../models/Guru');
const ProfilGuru = require('../../models/ProfilGuru');
const Kelas = require('../../models/Kelas');
const Siswa = require('../../models/Siswa');
const ProfilSiswa = require('../../models/ProfilSiswa');
const AyahSiswa = require('../../models/AyahSiswa');
const IbuSiswa = require('../../models/IbuSiswa');
const WaliSiswa = require('../../models/WaliSiswa');
const IjazahSiswa = require('../../models/IjazahSiswa');
const Tunggakan = require('../../models/Tunggakan');
const { errorCb, successCb } = require('../../config/callback');

module.exports = readIndex = {
  readGuruAll: async (cb) => {
    const guruData = await Guru.find();
    let allGuruBase = guruData.map((g) => ({
      ids: g._id,
      name: g.name,
      email: g.email,
      nik: g.nik,
      verify: g.verified === 1 ? true : false,
      verify_at: g.verified_at ? g.verified_at : null,
      img: g.imgUrl,
      created: g.created_at,
    }));
    let guruWithProfile = [];
    allGuruBase.map((item, idx) => {
      ProfilGuru.findOne({ guruId: item.ids })
        .then((profile) => {
          guruWithProfile.push({
            ids: item.ids,
            name: item.name,
            email: item.email,
            nik: item.nik,
            verify: item.verify,
            verify_at: item.verify_at,
            img: item.img,
            created: item.created,
            profile: {
              id: profile._id,
            },
          });
          if (guruWithProfile.length === allGuruBase.length) {
            return successCb({ status: 200, success: true, data: guruWithProfile }, cb);
          }
        })
        .catch((err) => {
          errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
        });
    });
  },
  readGuruOne: async (id, cb) => {
    await Guru.findById(id)
      .then((guru) => {
        ProfilGuru.findOne({ guruId: guru._id })
          .then((profile) => {
            const guruData = {
              ids: guru._id,
              name: guru.name,
              email: guru.email,
              nik: guru.nik,
              verify: guru.verified === 1 ? true : false,
              verify_at: guru.verified_at ? guru.verified_at : null,
              img: guru.imgUrl,
              created: guru.created_at,
              profile: {
                id: profile._id,
              },
            };
            successCb({ status: 200, success: true, data: guruData }, cb);
          })
          .catch((err) => {
            errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
          });
      })
      .catch((err) => {
        errorCb(
          { status: 404, success: false, msg: 'Id Guru Tidak Valid atau Tidak Ditemukan' },
          cb
        );
      });
  },
  readSiswaAll: async (cb) => {
    const siswa = await Siswa.find();
    const siswaBase = siswa.map((s) => ({
      ids: s._id,
      namaSiswa: s.name,
      email: s.email,
      img: s.imgUrl,
      kelas: s.kelas ? s.kelas : '',
      created_at: s.created_at,
    }));
    let siswaWithProfile = [];
    siswaBase.map((item) => {
      ProfilSiswa.findOne({ siswaId: item.ids })
        .then((profile) => {
          siswaWithProfile.push({
            ids: item.ids,
            namaSiswa: item.namaSiswa,
            email: item.email,
            img: item.img,
            kelas: item.kelas,
            created_at: item.created_at,
            profile: profile,
          });
          if (siswaWithProfile.length === siswaBase.length) {
            return successCb({ status: 200, success: true, data: siswaWithProfile }, cb);
          }
        })
        .catch((err) => {
          errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
        });
    });
  },
  readSiswaOne: async (id, cb) => {
    await Siswa.findById(id)
      .then(async (siswa) => {
        await ProfilSiswa.findOne({ siswaId: siswa._id })
          .then((profile) => {
            const siswaData = {
              ids: siswa._id,
              namaSiswa: siswa.name,
              email: siswa.email,
              img: siswa.imgUrl,
              kelas: siswa.kelas ? siswa.kelas : '',
              created_at: siswa.created_at,
              profile: profile,
            };
            successCb({ status: 200, success: true, data: siswaData }, cb);
          })
          .catch((err) => {
            errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
          });
      })
      .catch((err) => {
        errorCb(
          { status: 404, success: false, msg: 'Id Siswa Tidak Valid atau Tidak Ditemukan' },
          cb
        );
      });
  },
  readAyahSiswaOne: async (id, cb) => {
    await AyahSiswa.findOne({ siswaId: id })
      .then((ayah) => {
        const dataAyah = {
          nama: ayah.nama,
          tempatLahir: ayah.tempatLahir,
          agama: ayah.agama,
          wargaNegara: ayah.wargaNegara,
          pendidikan: ayah.pendidikan,
          pekerjaan: ayah.pekerjaan,
          penghasilan: ayah.penghasilan,
          alamat: ayah.alamat,
          tlp: ayah.tlp,
          tahunMeninggal: ayah.tahunMeninggal,
        };
        successCb({ status: 200, success: true, data: dataAyah }, cb);
      })
      .catch((err) => {
        errorCb({ status: 404, success: false, msg: 'Id Tidak Valid atau Tidak Ditemukan' }, cb);
      });
  },
  readIbuSiswaOne: async (id, cb) => {
    await IbuSiswa.findOne({ siswaId: id })
      .then((ibu) => {
        const dataIbu = {
          nama: ibu.nama,
          tempatLahir: ibu.tempatLahir,
          agama: ibu.agama,
          wargaNegara: ibu.wargaNegara,
          pendidikan: ibu.pendidikan,
          pekerjaan: ibu.pekerjaan,
          penghasilan: ibu.penghasilan,
          alamat: ibu.alamat,
          tlp: ibu.tlp,
          tahunMeninggal: ibu.tahunMeninggal,
        };
        successCb({ status: 200, success: true, data: dataIbu }, cb);
      })
      .catch((err) => {
        errorCb({ status: 404, success: false, msg: 'Id Tidak Valid atau Tidak Ditemukan' }, cb);
      });
  },
  readWaliSiswaOne: async (id, cb) => {
    await WaliSiswa.findOne({ siswaId: id })
      .then((wali) => {
        const dataWali = {
          nama: wali.nama,
          tempatLahir: wali.tempatLahir,
          agama: wali.agama,
          wargaNegara: wali.wargaNegara,
          pendidikan: wali.pendidikan,
          pekerjaan: wali.pekerjaan,
          penghasilan: wali.penghasilan,
          alamat: wali.alamat,
          tlp: wali.tlp,
          tahunMeninggal: wali.tahunMeninggal,
        };
        successCb({ status: 200, success: true, data: dataWali }, cb);
      })
      .catch((err) => {
        errorCb({ status: 404, success: false, msg: 'Id Tidak Valid atau Tidak Ditemukan' }, cb);
      });
  },
  readIjazahOne: async (id, cb) => {
    await IjazahSiswa.findOne({ siswaId: id })
      .then((ijazah) => {
        const dataIjazah = {
          ids: ijazah._id,
          nisn: ijazah.nisn,
          noUjianSmp: ijazah.noUjianSmp,
          namaLengkap: ijazah.namaLengkap,
          tempatLahir: ijazah.tempatLahir,
          namaAyah: ijazah.namaAyah,
        };
        successCb({ status: 200, success: true, data: dataIjazah }, cb);
      })
      .catch((err) => {
        errorCb({ status: 404, success: false, msg: 'Id Tidak Valid atau Tidak Ditemukan' }, cb);
      });
  },
  readKelasAll: async (cb) => {
    const kelas = await Kelas.find();
    const kelasAll = kelas.map((k) => ({
      ids: k._id,
      waliId: k.waliKelas,
      namaKelas: k.namaKelas,
      jurusan: k.jurusan,
      tingkat: k.tingkat === 1 ? 'X' : k.tingkat === 2 ? 'XI' : k.tingkat === 3 ? 'XII' : '',
      jumlahSiswa: k.jumlahSiswa,
    }));
    let kelasData = [];
    kelasAll.map((item) => {
      Guru.findById(item.waliId)
        .then((guru) => {
          kelasData.push({
            ids: item.ids,
            waliKelas: guru.name,
            namaKelas: item.namaKelas,
            jurusan: item.jurusan,
            tingkat: item.tingkat,
            jumlahSiswa: item.jumlahSiswa,
          });
          if (kelasData.length === kelasAll.length) {
            return successCb({ status: 200, success: true, data: kelasData }, cb);
          }
        })
        .catch((err) => {
          errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
        });
    });
  },
  readKelasOne: async (id, cb) => {
    await Kelas.findById(id)
      .then(async (kelas) => {
        await Guru.findById(kelas.waliKelas)
          .then((guru) => {
            const kelasData = {
              ids: kelas._id,
              waliKelas: guru.name,
              namaKelas: kelas.namaKelas,
              jurusan: kelas.jurusan,
              tingkat:
                kelas.tingkat === 1
                  ? 'X'
                  : kelas.tingkat === 2
                  ? 'XI'
                  : kelas.tingkat === 3
                  ? 'XII'
                  : '',
              jumlahSiswa: kelas.jumlahSiswa,
            };
            successCb({ status: 200, success: true, data: kelasData }, cb);
          })
          .catch((err) => {
            errorCb({ status: 500, success: false, msg: 'Internal server error' }, cb);
          });
      })
      .catch((err) => {
        errorCb(
          {
            status: 404,
            success: false,
            msg: 'Id Kelas Tidak Valid atau Tidak Ditemukan',
          },
          cb
        );
      });
  },
  readTunggakanAll: async (cb) => {},
  readTunggakanOne: async (id, cb) => {},
};
