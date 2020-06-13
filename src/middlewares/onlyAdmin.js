module.exports = onlyAdmin = async (req, res, next) => {
  if (req.decoded.role !== 2) {
    res.json({
      status: 403,
      msg: 'Forbidden',
    });
  } else {
    next();
  }
};
