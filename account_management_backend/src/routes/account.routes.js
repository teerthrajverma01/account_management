const { Router } = require("express");
const router = Router();

const {
  getAllAccount,
  getAccountByAccountNo,
  addNewAccount,
  updateExistingAccount,
  deleteExistingAccount,
} = require("../controllers/account.controller");

const accountValidator = require("../middlewares/accountValidator");
// ######account#########
router.route("/account").get(getAllAccount);
router.route("/account/:account_no").get(getAccountByAccountNo);
router.route("/account").post(accountValidator, addNewAccount);
router.route("/account").put(accountValidator, updateExistingAccount);
router.route("/account/:account_no").delete(deleteExistingAccount);

module.exports = router;
