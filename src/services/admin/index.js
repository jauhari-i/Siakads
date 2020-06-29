const serviceAdmin = {
  registerAdmin: require('./registerAdmin'),
  registerGuru: require('./registerGuru'),
  registerSiswa: require('./registerSiswa'),
  registerKelas: require('./registerKelas'),
  readIndex: require('./readIndex'),
  editIndex: require('./editIndex'),
  deleteIndex: require('./deleteIndex'),
};

module.exports = serviceAdmin;
