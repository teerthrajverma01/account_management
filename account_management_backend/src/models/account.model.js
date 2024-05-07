const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const AccountModel = db.define(
  "user_account",
  {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    account_no: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    customer_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.TEXT,
    },
    contact_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: {
        isContactNumber(value) {
          if (!/^(?:\+?\d{1,3}\s?)?(?:\d{10})$/.test(value)) {
            throw new Error("Invalid contact number format");
          }
        },
      },
    },
    email_id: {
      type: DataTypes.STRING(30),
      unique: true,
    },
    branch_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isBranchCode(value) {
          if (!/^[A-Z]{2}[0-9]{4}$/.test(value)) {
            throw new Error("Branch code format is invalid");
          }
        },
      },
    },
    balance_amount: {
      type: DataTypes.FLOAT(12, 2),
      defaultValue: 0.0,
    },
    account_type: {
      type: DataTypes.ENUM("SAVING", "CURRENT"),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "user_account",
  }
);

module.exports = AccountModel;

// CREATE TABLE IF NOT EXISTS user_account (
//     uid INT AUTO_INCREMENT PRIMARY KEY ,
//     account_no BIGINT NOT NULL UNIQUE,
//     customer_no INT NOT NULL UNIQUE,
//     address TEXT,
//     contact_no VARCHAR(15) NOT NULL UNIQUE,
//     email_id VARCHAR(30) UNIQUE,
//     branch_code VARCHAR(10) CHECK (branch_code REGEXP '^[A-Z]{2}[0-9]{4}$') NOT NULL ,
//     balance_amount FLOAT(12,2) DEFAULT 0.00,
//     account_type ENUM('SAVING','CURRENT' ) NOT NULL
//     )
