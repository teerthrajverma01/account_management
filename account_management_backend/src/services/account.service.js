const accountModel = require("../models/account.model");

// add new account detail
module.exports.addNewAccountService = async (data) => {
  try {
    let result = await accountModel.create(data);
    return result.dataValues;
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
};
// get all account detail
module.exports.getAllAccountService = async () => {
  try {
    const result = await accountModel.findAll({});

    const dataValuesArray = result.map((instance) => instance.dataValues);
    return dataValuesArray;
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
};
// get account by account_no
module.exports.getAccountByAccountNoService = async (account_no) => {
  try {
    const result = await accountModel.findOne({
      where: { account_no: account_no },
    });
    return result.dataValues;
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
};
// update existing account
module.exports.updateExistingAccountService = async (data) => {
  try {
    const [noOfUpdatedRows] = await accountModel.update(
      {
        address: data.address,
        email_id: data.email_id,
        balance_amount: data.balance_amount,
        account_type: data.account_type,
        contact_no: data.contact_no,
      },
      {
        where: {
          account_no: data.account_no,
        },
      }
    );
    return noOfUpdatedRows;
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
};
// delete existing account
module.exports.deleteExistingRoom = async (account_no) => {
  try {
    const noOfDeletedRows = await accountModel.destroy({
      where: {
        account_no: account_no,
      },
    });
    return noOfDeletedRows;
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
};
