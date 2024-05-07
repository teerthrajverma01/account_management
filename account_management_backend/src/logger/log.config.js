require("dotenv").config();

const winston = require("winston");
const { printf } = winston.format;

// custom format for logs
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

// connection+model+ transportconfig for logging in database
const account_mysql_options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER_ID,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  table: "account_logs",
  fields: {
    level: "log_level",
    label: "label",
    message: "message",
    meta: "metadata",
    timestamp: "timestamp",
  },
};
module.exports = {
  logFormat,
  account_mysql_options,
};
