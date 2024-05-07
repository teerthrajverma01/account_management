const ApiError = require("../utils/ApiError");
const AsyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const accountLogger = require("../logger/account_logger/index");

const accountService = require("../services/account.service");

const { validationResult } = require("express-validator");

module.exports.getAllAccount = AsyncHandler(async (req, res) => {
  try {
    let getAllAccountResponse = await accountService.getAllAccountService();
    if (getAllAccountResponse === "FAILURE") {
      accountLogger.error(
        `getAllAccount ->  couldnot fetch all account info from database`
      );
      throw new ApiError(500, "couldnot fetch all account info from database");
    }

    accountLogger.info(`getAllAccount ->  Fetched all account detail`);
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
      accountLogger.error(
        `getAccountByAccountNo ->  Couldnot fetch account with given account_no`
      );
      throw new ApiError(500, "Couldnot fetch account with given account_no");
    }

    accountLogger.info(
      `getAccountByAccountNo ->  Fetched account detail by account_no`
    );
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = [];
      errors
        .array()
        .map((err) => formattedErrors.push({ [err.path]: err.msg }));

      return res.status(422).json({
        success: false,
        errors: formattedErrors,
      });
    }
    let data = req.body;

    let addResponseData = await accountService.addNewAccountService(data);
    if (addResponseData === "FAILURE") {
      accountLogger.error(
        `addNewAccount ->  Couldnot add account detail to database`
      );
      throw new ApiError(500, "Couldnot add account detail to database");
    }

    accountLogger.info(`addNewAccount ->  Added account Detail `);
    return res
      .status(200)
      .json(new ApiResponse(200, addResponseData, "Added account Detail "));
  } catch (error) {
    throw error;
  }
});
module.exports.updateExistingAccount = AsyncHandler(async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = [];
      errors
        .array()
        .map((err) => formattedErrors.push({ [err.path]: err.msg }));

      return res.status(422).json({
        success: false,
        errors: formattedErrors,
      });
    }
    let data = req.body;

    let updateExistingAccountResponse =
      await accountService.updateExistingAccountService(data);
    if (updateExistingAccountResponse === "FAILURE") {
      accountLogger.error(
        `updateExistingAccount ->  Couldnot update existing account`
      );
      throw new ApiError(500, "Couldnot update existing account");
    }
    if (updateExistingAccountResponse === 0) {
      accountLogger.warn(`updateExistingAccount ->  Nothing to update`);
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            updateExistingAccountResponse,
            "Nothing to update"
          )
        );
    }
    accountLogger.info(`updateExistingAccount ->  Updated existing account`);
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
    let account_no = parseInt(req.params.account_no);

    let deleteExistingAccountResponse = await accountService.deleteExistingRoom(
      account_no
    );
    if (deleteExistingAccountResponse === "FAILURE") {
      accountLogger.error(
        `deleteExistingAccount ->  Couldnot delete existing account`
      );
      throw new ApiError(500, "Couldnot delete existing account");
    }
    if (deleteExistingAccountResponse === 0) {
      accountLogger.warn(`deleteExistingAccount ->  Nothing to delete`);
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            deleteExistingAccountResponse,
            "Nothing to delete"
          )
        );
    }
    accountLogger.info(`deleteExistingAccount ->  Deleted existing account`);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          deleteExistingAccountResponse,
          "Deleted existing account"
        )
      );
  } catch (error) {
    throw error;
  }
});
