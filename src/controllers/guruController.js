const controller = {};
const guruService = require('../services/guru/index');

controller.updatePassword = async (req, res) => {
  const data = {
    id: req.params.id,
    oldPass: req.body.oldPass,
    newPass: req.body.newPass,
    newPassConfirm: req.body.newPassConfirm,
  };
  data.id !== req.decoded.sub &&
    res.status(403).json({ success: false, status: 403, msg: 'Invalid id' });

  await guruService.updatePassword(data, (err, result) => {
    err && res.json(err);
    res.json(result);
  });
};

module.exports = controller;
