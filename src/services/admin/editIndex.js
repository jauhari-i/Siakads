const Guru = require('../../models/Guru');
const Kelas = require('../../models/Kelas');
const Siswa = require('../../models/Siswa');
const ProfilSiswa = require('../../models/ProfilSiswa');
const AyahSiswa = require('../../models/AyahSiswa');
const IbuSiswa = require('../../models/IbuSiswa');
const WaliSiswa = require('../../models/WaliSiswa');
const IjazahSiswa = require('../../models/IjazahSiswa');
const { errorCb, successCb } = require('../../config/callback');

module.exports = editIndex = {
  editGuru: async (id, data, cb) => {
    let validasi = [];
    !data.email &&
      validasi.push({
        error: 'Email Tidak boleh kosong',
      });
    !data.nik &&
      validasi.push({
        error: 'NIK Tidak boleh kosong',
      });
    !data.name &&
      validasi.push({
        error: 'Nama Tidak boleh kosong',
      });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);

    Guru.findByIdAndUpdate(id, {
      email: data.email,
      nik: data.nik,
      name: data.name,
    })
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Guru telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editGuruWithImage: async (id, data, file, cb) => {
    let validasi = [];
    !data.email &&
      validasi.push({
        error: 'Email Tidak boleh kosong',
      });
    !data.nik &&
      validasi.push({
        error: 'NIK Tidak boleh kosong',
      });
    !data.name &&
      validasi.push({
        error: 'Nama Tidak boleh kosong',
      });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);
    Guru.findByIdAndUpdate(id, {
      email: data.email,
      nik: data.nik,
      name: data.name,
      imgUrl: file.path,
    })
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Guru telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editKelas: async (id, data, cb) => {
    let validasi = [];
    !data.tingkat && validasi.push({ error: 'Tingkatan kelas tidak boleh kosong' });
    !data.nama && validasi.push({ error: 'Nama kelas tidak boleh kosong' });
    !data.wali && validasi.push({ error: 'Wali kelas diperlukan' });
    !data.jurusan && validasi.push({ error: 'Jurusan diperlukan' });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);

    Kelas.findByIdAndUpdate(id, {
      tingkat: data.tingkat,
      namaKelas: data.nama,
      wali: data.wali,
      jurusan: data.jurusan,
    })
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Kelas telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editSiswa: async (id, data, cb) => {
    let validasi = [];
    !data.email &&
      validasi.push({
        error: 'Email Tidak boleh kosong',
      });
    !data.name &&
      validasi.push({
        error: 'Nama Tidak boleh kosong',
      });
    !data.kelas && validasi.push({ error: 'Kelas tidak boleh kosong' });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);

    Siswa.findByIdAndUpdate(id, { email: data.email, name: data.name, kelasId: data.kelas })
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Siswa telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editSiswaWithImage: async (id, data, file, cb) => {
    let validasi = [];
    !data.email &&
      validasi.push({
        error: 'Email Tidak boleh kosong',
      });
    !data.name &&
      validasi.push({
        error: 'Nama Tidak boleh kosong',
      });
    !data.kelas && validasi.push({ error: 'Kelas tidak boleh kosong' });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);

    Siswa.findByIdAndUpdate(id, {
      email: data.email,
      name: data.name,
      kelasId: data.kelas,
      imgUrl: file.path,
    })
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Siswa telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editSiswaProfile: async (id, data, cb) => {
    ProfilSiswa.findByIdAndUpdate(id, data)
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Siswa telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editAyahSiswa: async (id, data, cb) => {
    let validasi = [];
    !data.nama &&
      validasi.push({
        error: 'Nama tidak boleh kosong',
      });
    !data.tempatLahir &&
      validasi.push({
        error: 'Tempat lahir diperlukan',
      });
    !data.agama &&
      validasi.push({
        error: 'Agama diperlukan',
      });
    !data.wargaNegara &&
      validasi.push({
        error: 'Warga Negara tidak boleh kosong',
      });
    !data.pendidikan &&
      validasi.push({
        error: 'Pendidikan tidak boleh kosong',
      });
    !data.pekerjaan &&
      validasi.push({
        error: 'Pekerjaan tidak boleh kosong',
      });
    !data.penghasilan &&
      validasi.push({
        error: 'Penghasilan tidak boleh kosong',
      });
    !data.alamat &&
      validasi.push({
        error: 'Alamat tidak boleh kosong',
      });
    !data.tlp &&
      validasi.push({
        error: 'Telepon tidak boleh kosong',
      });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);

    AyahSiswa.findOneAndUpdate(
      { siswaId: id },
      {
        nama: data.nama,
        tempatLahir: data.tempatLahir,
        wargaNegara: data.wargaNegara,
        agama: data.agama,
        pendidikan: data.pendidikan,
        pekerjaan: data.pekerjaan,
        penghasilan: data.penghasilan,
        alamat: data.alamat,
        tlp: data.tlp,
        tahunMeninggal: data.tahunMeninggal ? data.tahunMeninggal : 0,
      }
    )
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Ayah siswa telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editIbuSiswa: async (id, data, cb) => {
    let validasi = [];
    !data.nama &&
      validasi.push({
        error: 'Nama tidak boleh kosong',
      });
    !data.tempatLahir &&
      validasi.push({
        error: 'Tempat lahir diperlukan',
      });
    !data.agama &&
      validasi.push({
        error: 'Agama diperlukan',
      });
    !data.wargaNegara &&
      validasi.push({
        error: 'Warga Negara tidak boleh kosong',
      });
    !data.pendidikan &&
      validasi.push({
        error: 'Pendidikan tidak boleh kosong',
      });
    !data.pekerjaan &&
      validasi.push({
        error: 'Pekerjaan tidak boleh kosong',
      });
    !data.penghasilan &&
      validasi.push({
        error: 'Penghasilan tidak boleh kosong',
      });
    !data.alamat &&
      validasi.push({
        error: 'Alamat tidak boleh kosong',
      });
    !data.tlp &&
      validasi.push({
        error: 'Telepon tidak boleh kosong',
      });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);

    IbuSiswa.findOneAndUpdate(
      { siswaId: id },
      {
        nama: data.nama,
        tempatLahir: data.tempatLahir,
        wargaNegara: data.wargaNegara,
        agama: data.agama,
        pendidikan: data.pendidikan,
        pekerjaan: data.pekerjaan,
        penghasilan: data.penghasilan,
        alamat: data.alamat,
        tlp: data.tlp,
        tahunMeninggal: data.tahunMeninggal ? data.tahunMeninggal : 0,
      }
    )
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Ibu siswa telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editWaliSiswa: async (id, data, cb) => {
    let validasi = [];
    !data.nama &&
      validasi.push({
        error: 'Nama tidak boleh kosong',
      });
    !data.tempatLahir &&
      validasi.push({
        error: 'Tempat lahir diperlukan',
      });
    !data.agama &&
      validasi.push({
        error: 'Agama diperlukan',
      });
    !data.wargaNegara &&
      validasi.push({
        error: 'Warga Negara tidak boleh kosong',
      });
    !data.pendidikan &&
      validasi.push({
        error: 'Pendidikan tidak boleh kosong',
      });
    !data.pekerjaan &&
      validasi.push({
        error: 'Pekerjaan tidak boleh kosong',
      });
    !data.penghasilan &&
      validasi.push({
        error: 'Penghasilan tidak boleh kosong',
      });
    !data.alamat &&
      validasi.push({
        error: 'Alamat tidak boleh kosong',
      });
    !data.tlp &&
      validasi.push({
        error: 'Telepon tidak boleh kosong',
      });

    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);

    WaliSiswa.findOneAndUpdate(
      { siswaId: id },
      {
        nama: data.nama,
        tempatLahir: data.tempatLahir,
        wargaNegara: data.wargaNegara,
        agama: data.agama,
        pendidikan: data.pendidikan,
        pekerjaan: data.pekerjaan,
        penghasilan: data.penghasilan,
        alamat: data.alamat,
        tlp: data.tlp,
        tahunMeninggal: data.tahunMeninggal ? data.tahunMeninggal : 0,
      }
    )
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Wali siswa telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
  editIjazahSiswa: async (id, data, cb) => {
    let validasi = [];
    !data.nisn && validasi.push({ error: 'NISN Tidak boleh kosong' });
    !data.noUjianSmp && validasi.push({ error: 'No Ujian SMP Tidak boleh kosong' });
    !data.namaLengkap && validasi.push({ error: 'Nama lengkap tidak boleh kosong' });
    !data.tempatLahir && validasi.push({ error: 'Tempat lahir tidak boleh kosong' });
    !data.namaAyah && validasi.push({ error: 'Nama ayah tidak boleh kosong' });
    validasi.length > 0 &&
      errorCb({ status: 500, success: false, msg: 'Input error', error: validasi }, cb);

    IjazahSiswa.findOneAndUpdate(
      { siswaId: id },
      {
        nisn: data.nisn,
        noUjianSmp: data.noUjianSmp,
        namaLengkap: data.namaLengkap,
        tempatLahir: data.tempatLahir,
        namaAyah: data.namaAyah,
      }
    )
      .then((updated) => {
        successCb({ status: 200, success: true, msg: 'Ijazah siswa telah diupdate' }, cb);
      })
      .catch((err) => {
        errorCb({ status: 400, success: false, msg: 'Gagal mengupdate data' }, cb);
      });
  },
};
