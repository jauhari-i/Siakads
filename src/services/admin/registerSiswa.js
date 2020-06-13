const encryptPass = require('../../config/encryptPass');
const Siswa = require('../../models/Siswa');
const ProfilSiswa = require('../../models/ProfilSiswa');
const AyahSiswa = require('../../models/AyahSiswa');
const IbuSiswa = require('../../models/IbuSiswa');
const WaliSiswa = require('../../models/WaliSiswa');
const Ijazah = require('../../models/IjazahSiswa');

module.exports = registerSiswa = async (data, cb) => {
  const errorCb = (err) => {
    return cb(err);
  };

  let validation = [];
  !data.name && validation.push({ error: 'Nama tidak boleh kosong' });
  !data.email && validation.push({ error: 'Email tidak boleh kosong' });
  validation.length > 0 && errorCb({ success: false, status: 500, validation });
  const passwordBase = data.name.slice(0, 5);
  const password = passwordBase.toLowerCase();
  const encPass = await encryptPass(password, 10);
  await Siswa.create({
    name: data.name,
    email: data.email,
    password: encPass,
  })
    .then(async (siswa) => {
      const siswaAll = await Siswa.find();
      const date = new Date();
      const year = date.getFullYear();
      const pinbase = year.toString() + siswaAll.length.toString();
      const pin = Number(pinbase);
      await ProfilSiswa.create({
        pin: pin,
        namaLengkap: data.name,
        siswaId: siswa._id,
      });
      await AyahSiswa.create({ siswaId: siswa._id });
      await IbuSiswa.create({ siswaId: siswa._id });
      await WaliSiswa.create({ siswaId: siswa._id });
      await Ijazah.create({ namaLengkap: data.name, siswaId: siswa._id });
      cb(null, { success: true, status: 200, msg: 'Siswa telah terdaftar' });
    })
    .catch((err) => {
      console.log(err);
      errorCb({ success: false, status: 500, msg: 'Email telah terdaftar' });
    });
};
