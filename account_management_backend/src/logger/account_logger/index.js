const winston = require("winston");
const MySQLTransport = require("winston-mysql");
require("dotenv").config();
const { logFormat, account_mysql_options } = require("../log.config");

const { combine, timestamp, label } = winston.format;

const accountLogger = winston.createLogger({
  level: "info",
  format: combine(label({ label: "account-service" }), timestamp(), logFormat),
  defaultMeta: { service: "account-service" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/accountlogs/account_error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "./logs/accountlogs/account_allLogs.log",
      level: "info",
    }),
    new MySQLTransport(account_mysql_options),
  ],
});

module.exports = accountLogger;
