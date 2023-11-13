validateCode = (req, res, next) => {
  const code = req.params.code;
  if (!/^[0-9]+$/.test(code)) {
    return res.status(200).json("NOT_VALID");
  }
  next();
};

module.exports = validateCode;
