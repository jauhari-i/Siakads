const { pelanggaranIndex } = require('../services/admin/index');

const controller = {
  addKategori: async (req, res) => {
    const data = {
      namaKategori: req.body.namaKategori,
    };
    await pelanggaranIndex.addKategori(data, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  addJenisPelanggaran: async (req, res) => {
    const data = {
      namaPelanggaran: req.body.namaPelanggaran,
      poin: req.body.poin,
      deskripsi: req.body.deskripsi,
      kategori: req.body.kategori,
    };
    await pelanggaranIndex.addJenisPelanggaran(data, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  addPelanggaran: async (req, res) => {
    const data = {
      idSiswa: req.body.siswa,
      idJenisP: req.body.jenis,
      idGuru: req.body.guru,
    };
    await pelanggaranIndex.addPelanggaran(data, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  readKategoriAll: async (req, res) => {
    await pelanggaranIndex.readKategoriAll((err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  readJenisPelanggaranAll: async (req, res) => {
    await pelanggaranIndex.readJenisPelanggaranAll((err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  readPelanggaranAll: async (req, res) => {
    await pelanggaranIndex.readPelanggaranAll((err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  readKategoriOne: async (req, res) => {
    const id = req.params.id;
    await pelanggaranIndex.readKategoriOne(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  readJenisPelanggaranOne: async (req, res) => {
    const id = req.params.id;
    await pelanggaranIndex.readJenisPelanggaranOne(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  readPelanggaranOne: async (req, res) => {
    const id = req.params.id;
    await pelanggaranIndex.readPelanggaranOne(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  readPelanggaranSiswa: async (req, res) => {
    const id = req.params.id;
    await pelanggaranIndex.readPelanggaranSiswa(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  resetPelanggaran: async (req, res) => {
    await pelanggaranIndex.resetPelanggaran((err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  editKategori: async (req, res) => {
    const id = req.params.id;
    const data = {
      namaKategori: req.body.namaKategori,
    };
    await pelanggaranIndex.editKategori(id, data, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  editJenisPelanggaran: async (req, res) => {
    const id = req.params.id;
    const data = {
      namaPelanggaran: req.body.namaPelanggaran,
      poin: req.body.poin,
      deskripsi: req.body.deskripsi,
      kategori: req.body.kategori,
    };
    await pelanggaranIndex.editJenisPelanggaran(id, data, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  editPelanggaran: async (req, res) => {
    const id = req.params.id;
    const data = {
      idJenisP: req.body.jenis,
      idGuru: req.body.guru,
    };
    await pelanggaranIndex.editPelanggaran(id, data, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  deleteKategori: async (req, res) => {
    const id = req.params.id;
    await pelanggaranIndex.deleteKategori(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  deleteJenisPelanggaran: async (req, res) => {
    const id = req.params.id;
    await pelanggaranIndex.deleteJenisPelanggaran(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
  deletePelanggaran: async (req, res) => {
    const id = req.params.id;
    await pelanggaranIndex.deletePelanggaran(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.json(result);
    });
  },
};

module.exports = controller;
