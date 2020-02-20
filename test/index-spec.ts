const server = require("../server");
import { dropDb } from "../seed/dropDB";

import "mocha";
import chai, { expect, assert } from "chai";
import chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("test", () => {
  it("should return a string", () => {
    expect("ci with travis").to.equal("ci with travis");
  });
});

describe("Describe the basic nature of what are the series of test cases here", () => {
  it("Creates an estate admin", done => {
    chai
      .request(server)
      .post("/api/v1/estate-admin/create")
      .send({
        name: "john dolese",
        email: "johndolese@test.com",
        phoneNumber: "+23480908352824",
        address: "24 Bansheer Avenue",
        estateType: "Block"
      })
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data.name).to.eql("john dosse"); // expression which will be true if name equal to john doe
        done();
      })
      .catch(done);
  });
});
