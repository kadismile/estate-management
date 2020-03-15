
const server = require("../server");
import "mocha";
import chai, { expect, assert } from "chai";
import chaiHttp = require("chai-http");
import {SubTransactionAttributes} from "../types/subTransactions";
chai.use(chaiHttp);

describe("Describe the basic nature of what are the series of test cases here", () => {
  it("Creates a SubTransaction", done => {
    let newSubTransaction: SubTransactionAttributes = {
      // id: Math.floor(Math.random() *1000),
      transactionId: 1,
      status: "pending",
      type: "house_rent",
      amount: 40000,
      outstandingAmount: 50000,
      subTenantId: 1,
      description: "paid for the rent of 2050/2051"
    };
    chai
      .request(server)
      .post("/api/v1/sub-transactions/create")
      .send(newSubTransaction)
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(newSubTransaction); // expression which will be true if the document created contains the body that was sent
        done();
      })
      .catch(done);
  });
  it("Updates Subtransaction", done => {
    let update: SubTransactionAttributes = {
      transactionId: 1,
      subTenantId: 1,
      status: "pending",
      type: "house_rent",
      amount: 50000,
      outstandingAmount: 0,
      description: "paid for the completion of 2050/2051"
    };
    chai
      .request(server)
      .put(`/api/v1/sub-transactions/1`)
      .send(update)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(update); // expression which will be true if name equal to john doe
        done();
      })
      .catch(done);
  });
  it("Gets a Subtransaction by id", done => {
    chai
      .request(server)
      .get(`/api/v1/sub-transactions/1`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });
  it("Gets all Subtransactions ", done => {
    chai
      .request(server)
      .get(`/api/v1/sub-transactions/`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.isArray(res.body.data); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });
});