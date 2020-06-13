module.exports = onlyTeacher = async (req, res, next) => {
  if (req.decoded.role === 0) {
    res.json({
      status: 403,
      msg: 'Forbidden',
    });
  } else {
    next();
  }
};
