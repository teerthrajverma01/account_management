DROP TABLE IF EXISTS user_account;

CREATE TABLE IF NOT EXISTS user_account (
uid INT AUTO_INCREMENT PRIMARY KEY ,
account_no BIGINT NOT NULL UNIQUE,
customer_no INT NOT NULL UNIQUE,
address TEXT,
contact_no VARCHAR(15) NOT NULL UNIQUE,
email_id VARCHAR(30) UNIQUE,
branch_code VARCHAR(10) CHECK (branch_code REGEXP '^[A-Z]{2}[0-9]{4}$') NOT NULL ,
balance_amount FLOAT(12,2) DEFAULT 0.00,
account_type ENUM('SAVING','CURRENT' ) NOT NULL 
) 