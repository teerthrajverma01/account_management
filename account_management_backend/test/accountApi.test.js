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
  describe("GET /api/account:account_id", () => {
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
            .eql("Fetched all account detail");
          res.body.should.have.property("data").which.is.an("object");

          const account = res.body.data;
          account.should.have.property("uid");
          account.should.have.property("account_no");
          account.should.have.property("customer_no");
          account.should.have.property("address");
          account.should.have.property("contact_no");
          account.should.have.property("email_id");
          account.should.have.property("branch_code");
          account.should.have.property("account_type");
          account.account_type.should.be.oneOf(["SAVING", "CURRENT"]);

          done();
        });
    });
  });
  //  test add new account
  // test update existing account
  // test delete existing account
});
