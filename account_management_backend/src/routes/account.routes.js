const { Router } = require("express");
const router = Router();

// ######account#########
router.route("/account").get();
router.route("/account/:account_no").get();
router.route("/account").post();
router.route("/account").put();
router.route("/account").delete();

module.exports = router;
