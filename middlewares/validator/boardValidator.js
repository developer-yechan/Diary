const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../../codes/errorCodes");

const boardValidator = () => {
  return [
    body("title")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isLength({ max: 20 })
      .withMessage(errorCodes.titleFormat),
    body("content")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isLength({ max: 200 })
      .withMessage(errorCodes.contentFormat),
    body("password")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .matches(/(?=.*?[0-9]).{6,}/)
      .withMessage(errorCodes.pwdFormat),
    index,
  ];
};

module.exports = boardValidator;
