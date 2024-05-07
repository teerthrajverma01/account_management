const { Router } = require("express");
const router = Router();

const {
  getAllAccount,
  getAccountByAccountNo,
  addNewAccount,
  updateExistingAccount,
  deleteExistingAccount,
} = require("../controllers/account.controller");

const {
  accountAddValidator,
  accountUpdateValidator,
} = require("../middlewares/accountValidator");
// ######account#########
router.route("/account").get(getAllAccount);
router.route("/account/:account_no").get(getAccountByAccountNo);
router.route("/account").post(accountAddValidator, addNewAccount);
router.route("/account").put(accountUpdateValidator, updateExistingAccount);
router.route("/account/:account_no").delete(deleteExistingAccount);

module.exports = router;
