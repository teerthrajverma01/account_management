const { body } = require("express-validator");

const accountAddValidator = [
  body("account_no")
    .trim()
    .notEmpty()
    .withMessage("account_no cannot be empty")
    .isNumeric()
    .withMessage("account no should be number")
    .isLength({ min: 12, max: 15 })
    .withMessage("should be 12-15 digit"),
  body("email_id")
    .trim()
    .notEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("email must contain @gmail.com"),
  body("contact_no")
    .trim()
    .notEmpty()
    .withMessage("phoneno cannot be empty")
    .custom((value) => {
      const phoneRegex = /^(?:\+?\d{1,3}\s?)?(?:\d{10})$/;
      if (!phoneRegex.test(value)) {
        throw new Error("invalid phoneno");
      }
      return true;
    }),
  body("branch_code")
    .trim()
    .notEmpty()
    .withMessage("branch code cannot be empty")
    .custom((value) => {
      if (!/^[A-Z]{2}[0-9]{4}$/.test(value)) {
        throw new Error("Branch code format is invalid");
      }
      return true;
    }),
  body("account_type")
    .trim()
    .toUpperCase()
    .custom((value) => {
      let type_enum = ["SAVING", "CURRENT"];
      if (!type_enum.includes(value)) {
        throw new Error("account type not appropiate");
      }
      return true;
    }),
  body("balance_amount")
    .optional()
    .isFloat()
    .withMessage("balance should be number")
    .custom((value) => {
      if (value < 0) {
        throw new Error("balance cannot be negative");
      }
      return true;
    }),
];
const accountUpdateValidator = [
  body("account_no")
    .trim()
    .notEmpty()
    .isNumeric()
    .withMessage("account no should be number")
    .isLength({ min: 12, max: 15 })
    .withMessage("should be 12-15 digit"),
  body("email_id")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("email must contain @gmail.com"),
  body("contact_no")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("phoneno cannot be empty")
    .custom((value) => {
      const phoneRegex = /^(?:\+?\d{1,3}\s?)?(?:\d{10})$/;
      if (!phoneRegex.test(value)) {
        throw new Error("invalid phoneno");
      }
      return true;
    }),
  body("account_type")
    .optional()
    .trim()
    .toUpperCase()
    .custom((value) => {
      let type_enum = ["SAVING", "CURRENT"];
      if (!type_enum.includes(value)) {
        throw new Error("account type not appropiate");
      }
      return true;
    }),
  body("balance_amount")
    .optional()
    .isFloat()
    .withMessage("balance should be number")
    .custom((value) => {
      if (value < 0) {
        throw new Error("balance cannot be negative");
      }
      return true;
    }),
];
module.exports = { accountAddValidator, accountUpdateValidator };
