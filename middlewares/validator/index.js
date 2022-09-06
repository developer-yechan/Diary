const { validationResult } = require("express-validator");

// 각 validator의 결과를 req에서 조회 후
// error가 있으면 return
// error가 없으면 service 로직 수행

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json(errors);
};
