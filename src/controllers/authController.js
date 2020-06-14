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

controller.resetAdmin = async (req, res) => {
  const data = {
    email: req.body.email,
  };
  await authServices.resetPassword.resetAdmin(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.resetGuru = async (req, res) => {
  const data = {
    email: req.body.email,
  };
  await authServices.resetPassword.resetGuru(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.resetSiswa = async (req, res) => {
  const data = {
    email: req.body.email,
  };
  await authServices.resetPassword.resetSiswa(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.changeAdmin = async (req, res) => {
  const token = req.params.token;
  await authServices.changePass.changeAdmin(token, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.changeGuru = async (req, res) => {
  const token = req.params.token;
  await authServices.changePass.changeGuru(token, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

controller.changeSiswa = async (req, res) => {
  const token = req.params.token;
  await authServices.changePass.changeSiswa(token, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

module.exports = controller;
