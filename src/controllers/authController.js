const authServices = require('../services/auth');
const controller = {};

controller.authGuru = async (req, res) => {
  const data = {
    nik: req.body.nik,
    password: req.body.password,
  };
  await authServices.loginGuru(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.authAdmin = async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  await authServices.loginAdmin(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.authSiswa = async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  await authServices.loginSiswa(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};
module.exports = controller;
