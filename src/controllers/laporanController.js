const { laporSarana } = require("../services/siswa/index");

module.exports = controller = {
  allLaporan: async (req, res) => {
    await laporSarana.allLaporan((err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  oneLaporan: async (req, res) => {
    const id = req.params.id;
    await laporSarana.oneLaporan(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  addLaporan: async (req, res) => {
    const data = {
      kelasId: req.body.kelasId,
      pengaduan: req.body.pengaduan,
    };
    const file = req.file;
    await laporSarana.addLaporan(data, file, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  deleteLaporan: async (req, res) => {
    const id = req.params.id;
    await laporSarana.deleteLaporan(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
};
