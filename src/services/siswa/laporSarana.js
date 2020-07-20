const Laporan = require("../../models/Laporan");
const Kelas = require("../../models/Kelas");
const { errorCb, successCb } = require("../../config/callback");

// get all laporan
const allLaporan = async (cb) => {
  try {
    const data = await Laporan.find({});
    successCb(
      {
        success: true,
        status: 200,
        data: data,
      },
      cb
    );
  } catch (error) {
    errorCb(
      {
        success: false,
        status: 500,
        msg: "Internal server error",
      },
      cb
    );
  }
};
// get one laporan
const oneLaporan = async (id, cb) => {
  try {
    const data = await Laporan.findById(id);
    if (!data)
      throw {
        success: false,
        msg: "Data not found",
        status: 404,
      };
    successCb(
      {
        success: true,
        status: 200,
        data: data,
      },
      cb
    );
  } catch (error) {
    console.log(error);
    if (error.msg === "Data not found") {
      errorCb(error, cb);
    } else {
      errorCb(
        {
          success: false,
          status: 500,
          msg: "Internal server error",
        },
        cb
      );
    }
  }
};
// post laporan
const addLaporan = async (data, file, cb) => {
  try {
    const kelas = await Kelas.findById(data.kelasId);
    if (!kelas)
      throw {
        success: false,
        status: 404,
        msg: "Ruangan tidak ditemukan",
      };
    const laporan = await Laporan.create({
      pengaduan: data.pengaduan,
      lokasi: kelas.namaKelas,
      imgUrl: file.path,
    });
    successCb(
      {
        success: true,
        status: 200,
        data: laporan,
      },
      cb
    );
  } catch (error) {
    if (error.msg === "Ruangan tidak ditemukan") {
      errorCb(error, cb);
    } else {
      errorCb(
        {
          success: false,
          status: 500,
          msg: "Internal server error",
        },
        cb
      );
    }
  }
};
// delete laporan
const deleteLaporan = async (id, cb) => {
  try {
    const laporan = await Laporan.deleteOne({ _id: id });
    successCb(
      {
        success: true,
        status: 200,
        data: laporan,
      },
      cb
    );
  } catch (error) {
    errorCb(
      {
        success: false,
        status: 500,
        msg: "Internal server error",
      },
      cb
    );
  }
};

module.exports = laporSarana = {
  allLaporan,
  oneLaporan,
  addLaporan,
  deleteLaporan,
};
