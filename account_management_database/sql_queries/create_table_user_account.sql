DROP TABLE IF EXISTS user_account;

CREATE TABLE IF NOT EXISTS user_account (
uid INT AUTO_INCREMENT PRIMARY KEY ,
account_no BIGINT,
customer_no INT,
address TEXT,
contact_no VARCHAR(15),
email_id VARCHAR(30),
branch_code VARCHAR(10) CHECK (branch_code REGEXP '^[A-Z]{2}[0-9]{4}$'),
balance_amount FLOAT(12,2) DEFAULT 0.00,
account_type ENUM('SAVING','CURRENT' )
) 