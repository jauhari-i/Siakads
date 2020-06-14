const authServices = {
  loginGuru: require('./authGuru'),
  loginAdmin: require('./authAdmin'),
  loginSiswa: require('./authSiswa'),
  resetPassword: require('./resetPassword'),
  changePass: require('./changePass'),
};

module.exports = authServices;
