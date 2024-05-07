const { Router } = require("express");
const router = Router();

const {
  getAllAccount,
  getAccountByAccountNo,
  addNewAccount,
  updateExistingAccount,
  deleteExistingAccount,
} = require("../controllers/account.controller");
// ######account#########
router.route("/account").get(getAllAccount);
router.route("/account/:account_no").get(getAccountByAccountNo);
router.route("/account").post(addNewAccount);
router.route("/account").put(updateExistingAccount);
router.route("/account/:account_no").delete(deleteExistingAccount);

module.exports = router;
