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

module.exports = controller;
