const ApiError = require("../utils/ApiError");
const AsyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const accountService = require("../services/account.service");

module.exports.getAllAccount = AsyncHandler(async (req, res) => {
  try {
    let getAllAccountResponse = await accountService.getAllAccountService();
    if (getAllAccountResponse === "FAILURE") {
      throw new ApiError(500, "couldnot fetch all account info from database");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          getAllAccountResponse,
          "Fetched all account detail"
        )
      );
  } catch (error) {
    throw error;
  }
});
module.exports.getAccountByAccountNo = AsyncHandler(async (req, res) => {
  try {
    let account_no = parseInt(req.params.account_no);

    let getAccountByAccountNoResponse =
      await accountService.getAccountByAccountNoService(account_no);
    if (getAccountByAccountNoResponse === "FAILURE") {
      throw new ApiError(500, "Couldnot fetch account with given account_no");
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          getAccountByAccountNoResponse,
          "Fetched account detail by account_no"
        )
      );
  } catch (error) {
    throw error;
  }
});
module.exports.addNewAccount = AsyncHandler(async (req, res) => {
  try {
    let data = req.body;

    let addResponseData = await accountService.addNewAccountService(data);
    if (addResponseData === "FAILURE") {
      throw new ApiError(500, "Couldnot add account detail to database");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, addResponseData, "Added account Detail "));
  } catch (error) {
    throw error;
  }
});
module.exports.updateExistingAccount = AsyncHandler(async (req, res) => {
  try {
    let data = req.body;

    let updateExistingAccountResponse =
      await accountService.updateExistingAccountService(data);
    if (updateExistingAccountResponse === "FAILURE") {
      throw new ApiError(500, "Couldnot update existing account");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updateExistingAccountResponse,
          "Updated existing account"
        )
      );
  } catch (error) {
    throw error;
  }
});
module.exports.deleteExistingAccount = AsyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw error;
  }
});
