const { body } = require("express-validator");

const accountValidator = [
  body("account_no")
    .trim()
    .notEmpty()
    .isNumeric()
    .withMessage("account no should be number")
    .isLength({ min: 12, max: 15 })
    .withMessage("should be 12 digit"),
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
];
module.exports = accountValidator;
