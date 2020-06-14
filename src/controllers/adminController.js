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

module.exports = controller;
