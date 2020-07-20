const express = require("express");
const app = express();
const { laporanController } = require("../controllers");
const parser = require("../middlewares/uploadBuktiLaporan");

app.get("/", laporanController.allLaporan);
app.get("/:id", laporanController.oneLaporan);
app.post("/", parser.single("img"), laporanController.addLaporan);
app.delete("/:id", laporanController.deleteLaporan);

module.exports = app;
