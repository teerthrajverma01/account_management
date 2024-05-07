const server = require("../index");

let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("accountApi", () => {
  // test get all accounts
  describe("GET /api/account", () => {
    it("should get all acocunts", (done) => {
      chai
        .request(server)
        .get("/api/account")
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("statusCode").eql(200);
          res.body.should.have.property("success").eql(true);
          res.body.should.have
            .property("message")
            .eql("Fetched all account detail");
          res.body.should.have.property("data").which.is.an("array");

          const accounts = res.body.data;
          accounts.should.have.lengthOf.at.least(1);
          for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            account.should.have.property("uid");
            account.should.have.property("account_no");
            account.should.have.property("customer_no");
            account.should.have.property("address");
            account.should.have.property("contact_no");
            account.should.have.property("email_id");
            account.should.have.property("branch_code");
            account.should.have.property("account_type");
            account.account_type.should.be.oneOf(["SAVING", "CURRENT"]);
          }
          done();
        });
    });
  });
  //   test get account by account_no
  describe("GET /api/account/:account_id", () => {
    it("should get account by account_no", (done) => {
      chai
        .request(server)
        .get("/api/account/1234567890123456")
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("statusCode").eql(200);
          res.body.should.have.property("success").eql(true);
          res.body.should.have
            .property("message")
            .eql("Fetched account detail by account_no");
          res.body.should.have.property("data").which.is.an("object");
          res.body.data.should.have.property("uid");
          res.body.data.should.have.property("account_no");
          res.body.data.should.have.property("customer_no");
          res.body.data.should.have.property("address");
          res.body.data.should.have.property("contact_no");
          res.body.data.should.have.property("email_id");
          res.body.data.should.have.property("branch_code");
          res.body.data.should.have.property("account_type");
          res.body.data.account_type.should.be.oneOf(["SAVING", "CURRENT"]);

          done();
        });
    });
  });
  //  test add new account

  describe("POST /api/account", () => {
    it("should add new account", (done) => {
      let data = {
        account_no: 1111222233334444,
        customer_no: 5,
        address: "555 Cedar Street, Ruralton",
        contact_no: "1111222233",
        email_id: "charlie@example.com",
        branch_code: "IJ7890",
        balance_amount: 2000.0,
        account_type: "SAVING",
      };
      chai
        .request(server)
        .post("/api/account")
        .send(data)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("statusCode").eql(200);
          res.body.should.have.property("success").eql(true);
          res.body.should.have.property("message").eql("Added account Detail ");

          res.body.should.have.property("data").which.is.an("object");
          res.body.data.should.have.property("uid");
          res.body.data.should.have.property("account_no");
          res.body.data.should.have.property("customer_no");
          res.body.data.should.have.property("address");
          res.body.data.should.have.property("contact_no");
          res.body.data.should.have.property("email_id");
          res.body.data.should.have.property("branch_code");
          res.body.data.should.have.property("account_type");
          res.body.data.account_type.should.be.oneOf(["SAVING", "CURRENT"]);

          done();
        });
    });
  });
  // test update existing account

  describe("PUT /api/account", () => {
    it("should get account by account_no", (done) => {
      let data = {
        account_no: 1357924680135792,

        address: "501 Pine Street, Hamletville",
        contact_no: "1357924680",
        email_id: "bob2@example.com",
        branch_code: "GH3456",
        account_type: "SAVING",
      };
      chai
        .request(server)
        .put("/api/account")
        .send(data)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("statusCode").eql(200);
          res.body.should.have.property("success").eql(true);
          res.body.should.have
            .property("message")
            .eql("Updated existing account");

          done();
        });
    });
  });
  // test delete existing account

  describe("PUT /api/account", () => {
    it("should delete account by account_no", (done) => {
      let data = {
        account_no: 1357924680135792,

        address: "501 Pine Street, Hamletville",
        contact_no: "1357924680",
        email_id: "bob2@example.com",
        branch_code: "GH3456",
        account_type: "SAVING",
      };
      chai
        .request(server)
        .delete("/api/account/1111222233334444")
        .send(data)
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("statusCode").eql(200);
          res.body.should.have.property("success").eql(true);
          res.body.should.have
            .property("message")
            .eql("Deleted existing account");

          done();
        });
    });
  });
});
