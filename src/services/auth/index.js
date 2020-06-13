const authServices = {
  loginGuru: require('./authGuru'),
  loginAdmin: require('./authAdmin'),
  loginSiswa: require('./authSiswa'),
};

module.exports = authServices;
