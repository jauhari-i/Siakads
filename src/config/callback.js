module.exports = callback = {
  errorCb: (err, cb) => {
    return cb(err);
  },
  successCb: (data, cb) => {
    return cb(null, data);
  },
};
