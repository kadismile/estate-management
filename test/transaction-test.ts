import {TransactionAttributes} from "../types/transactions";

const server = require("../server");
import "mocha";
import chai from "chai";
import chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Describe the basic nature of what are the series of test cases here", () => {
  it("Creates a Transaction", done => {
    let newTransaction: TransactionAttributes = {
      // id: Math.floor(Math.random() *1000),
      tenantId: 1,
      status: "pending",
      type: "house_rent",
      amount: 40000,
      outstandingAmount: 50000,
      description: "paid for the rent of 2050/2051"
    };
    chai
      .request(server)
      .post("/api/v1/transactions/create")
      .send(newTransaction)
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(newTransaction); // expression which will be true if the document created contains the body that was sent
        done();
      })
      .catch(done);
  });
  it("Updates transaction", done => {
    let update: TransactionAttributes = {
      tenantId: 1,
      status: "pending",
      type: "house_rent",
      amount: 50000,
      outstandingAmount: 0,
      description: "paid for the completion of 2050/2051"
    };
    chai
      .request(server)
      .put(`/api/v1/transactions/1`)
      .send(update)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.expect(res.body.data).to.deep.include(update); // assertion expression which will be true if id exists
        done();
      });
  });
  it("Gets a transaction by id", done => {
    chai
      .request(server)
      .get(`/api/v1/transactions/1`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        done();
      });
  });
  it("Gets all transactions ", done => {
    chai
      .request(server)
      .get(`/api/v1/transactions/`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.isArray(res.body.data); // assertion expression which will be true if id exists
        done();
      });
  });
});