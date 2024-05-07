const { body } = require("express-validator");

const accountValidator = [
  body("account_no")
    .optional()
    .trim()
    .notEmpty()
    .isNumeric()
    .withMessage("account no should be number")
    .isLength({ min: 12, max: 12 })
    .withMessage("should be 12 digit"),
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
];
