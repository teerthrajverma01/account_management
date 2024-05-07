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
