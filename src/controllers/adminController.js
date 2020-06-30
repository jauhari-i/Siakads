const serviceAdmin = require('../services/admin/index');

const controller = {};

controller.registerGuru = async (req, res) => {
  const data = {
    name: req.body.name,
    nik: req.body.nik,
    email: req.body.email,
  };
  await serviceAdmin.registerGuru(data, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.registerAdmin = async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
  };
  await serviceAdmin.registerAdmin(data, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.registerSiswa = async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
  };
  await serviceAdmin.registerSiswa(data, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.registerKelas = async (req, res) => {
  const data = {
    namaKelas: req.body.namaKelas,
    jurusan: req.body.jurusan,
    waliKelas: req.body.waliKelas,
    tingkat: req.body.tingkat,
  };
  await serviceAdmin.registerKelas(data, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readGuruAll = async (req, res) => {
  await serviceAdmin.readIndex.readGuruAll((err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readGuruOne = async (req, res) => {
  const id = req.params.id;
  await serviceAdmin.readIndex.readGuruOne(id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readKelasAll = async (req, res) => {
  await serviceAdmin.readIndex.readKelasAll((err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readKelasOne = async (req, res) => {
  const id = req.params.id;
  await serviceAdmin.readIndex.readKelasOne(id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readSiswaAll = async (req, res) => {
  await serviceAdmin.readIndex.readSiswaAll((err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readSiswaOne = async (req, res) => {
  await serviceAdmin.readIndex.readSiswaOne(req.params.id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readAyahSiswa = async (req, res) => {
  await serviceAdmin.readIndex.readAyahSiswaOne(req.params.id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readIbuSiswa = async (req, res) => {
  await serviceAdmin.readIndex.readIbuSiswaOne(req.params.id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.readWaliSiswa = async (req, res) => {
  await serviceAdmin.readIndex.readWaliSiswaOne(req.params.id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.editGuru = async (req, res) => {
  const id = req.params.id;
  const data = {
    email: req.body.email,
    nik: req.body.nik,
    name: req.body.name,
  };
  if (req.file) {
    const file = req.file;
    await serviceAdmin.editIndex.editGuruWithImage(id, data, file, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  } else {
    await serviceAdmin.editIndex.editGuru(id, data, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  }
};

controller.editSiswa = async (req, res) => {
  const id = req.params.id;
  const data = {
    email: req.body.email,
    name: req.body.name,
    kelas: req.body.kelas,
  };
  if (req.file) {
    const file = req.file;
    await serviceAdmin.editIndex.editSiswaWithImage(id, data, file, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  } else {
    await serviceAdmin.editIndex.editSiswa(id, data, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  }
};

controller.editAyahSiswa = async (req, res) => {
  const id = req.params.id;
  const data = {
    nama: req.body.nama,
    tempatLahir: req.body.tempatLahir,
    agama: req.body.agama,
    wargaNegara: req.body.wargaNegara,
    pendidikan: req.body.pendidikan,
    pekerjaan: req.body.pekerjaan,
    penghasilan: req.body.penghasilan,
    alamat: req.body.alamat,
    tlp: req.body.tlp,
    tahunMeninggal: req.body.tahunMeninggal,
  };
  await serviceAdmin.editIndex.editAyahSiswa(id, data, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.editIbuSiswa = async (req, res) => {
  const id = req.params.id;
  const data = {
    nama: req.body.nama,
    tempatLahir: req.body.tempatLahir,
    agama: req.body.agama,
    wargaNegara: req.body.wargaNegara,
    pendidikan: req.body.pendidikan,
    pekerjaan: req.body.pekerjaan,
    penghasilan: req.body.penghasilan,
    alamat: req.body.alamat,
    tlp: req.body.tlp,
    tahunMeninggal: req.body.tahunMeninggal,
  };
  await serviceAdmin.editIndex.editIbuSiswa(id, data, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.editWaliSiswa = async (req, res) => {
  const id = req.params.id;
  const data = {
    nama: req.body.nama,
    tempatLahir: req.body.tempatLahir,
    agama: req.body.agama,
    wargaNegara: req.body.wargaNegara,
    pendidikan: req.body.pendidikan,
    pekerjaan: req.body.pekerjaan,
    penghasilan: req.body.penghasilan,
    alamat: req.body.alamat,
    tlp: req.body.tlp,
    tahunMeninggal: req.body.tahunMeninggal,
  };
  await serviceAdmin.editIndex.editWaliSiswa(id, data, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.editIjazahSiswa = async (req, res) => {
  const id = req.params.id;
  const data = {
    nisn: req.body.nisn,
    noUjianSmp: req.body.noUjianSmp,
    namaLengkap: req.body.namaLengkap,
    tempatLahir: req.body.tempatLahir,
    namaAyah: req.body.namaAyah,
  };
  await serviceAdmin.editIndex.editIjazahSiswa(id, data, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.deleteGuru = async (req, res) => {
  const id = req.params.id;
  await serviceAdmin.deleteIndex.deleteGuru(id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.deleteKelas = async (req, res) => {
  const id = req.params.id;
  await serviceAdmin.deleteIndex.deleteKelas(id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

controller.deleteSiswa = async (req, res) => {
  const id = req.params.id;
  await serviceAdmin.deleteIndex.deleteSiswa(id, (err, result) => {
    err && res.status(err.status).json(err);
    res.json(result);
  });
};

module.exports = controller;
