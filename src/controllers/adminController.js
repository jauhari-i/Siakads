const serviceAdmin = require('../services/admin/index');

const controller = {};

controller.registerGuru = async (req, res) => {
  const data = {
    name: req.body.name,
    nik: req.body.nik,
    email: req.body.email,
  };
  await serviceAdmin.registerGuru(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.registerAdmin = async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
  };
  await serviceAdmin.registerAdmin(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.registerSiswa = async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
  };
  await serviceAdmin.registerSiswa(data, (err, result) => {
    err && res.json(err);
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
    err && res.json(err);
    res.json(result);
  });
};

controller.readGuruAll = async (req, res) => {
  await serviceAdmin.readIndex.readGuruAll((err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.readGuruOne = async (req, res) => {
  const id = req.params.id;
  await serviceAdmin.readIndex.readGuruOne(id, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.readKelasAll = async (req, res) => {
  await serviceAdmin.readIndex.readKelasAll((err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.readKelasOne = async (req, res) => {
  const id = req.params.id;
  await serviceAdmin.readIndex.readKelasOne(id, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.readSiswaAll = async (req, res) => {
  await serviceAdmin.readIndex.readSiswaAll((err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.readSiswaOne = async (req, res) => {
  await serviceAdmin.readIndex.readSiswaOne(req.params.id, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.readAyahSiswa = async (req, res) => {
  await serviceAdmin.readIndex.readAyahSiswaOne(req.params.id, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.readIbuSiswa = async (req, res) => {
  await serviceAdmin.readIndex.readIbuSiswaOne(req.params.id, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.readWaliSiswa = async (req, res) => {
  await serviceAdmin.readIndex.readWaliSiswaOne(req.params.id, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

module.exports = controller;
