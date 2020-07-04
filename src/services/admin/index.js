const serviceAdmin = {
  registerAdmin: require('./registerAdmin'),
  registerGuru: require('./registerGuru'),
  registerSiswa: require('./registerSiswa'),
  registerKelas: require('./registerKelas'),
  readIndex: require('./readIndex'),
  editIndex: require('./editIndex'),
  deleteIndex: require('./deleteIndex'),
  pelanggaranIndex: require('./pelanggaranIndex'),
};

module.exports = serviceAdmin;
