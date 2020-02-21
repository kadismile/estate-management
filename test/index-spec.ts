const server = require("../server");
import { dropDb } from "../seed/dropDB";

import "mocha";
import chai, { expect, assert } from "chai";
import chaiHttp = require("chai-http");
import { EstateAdminAttributes } from "../types/estateAdmin";
import { request } from "express";
chai.use(chaiHttp);

describe("test", () => {
  it("should return a string", () => {
    expect("ci with travis").to.equal("ci with travis");
  });
});

describe("Describe the basic nature of what are the series of test cases here", () => {
  it("Creates an estate admin", done => {
    let newAdmin: EstateAdminAttributes = {
      id: Math.floor(Math.random() * 100000),
      name: "johnny doslese",
      email: "johndalapo@test.com",
      phoneNumber: "+2348049835094",
      address: "24 Bansxheer Avenue",
      estateType: "Block"
    };
    chai
      .request(server)
      .post("/api/v1/estate-admin/create")
      .send(newAdmin)
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(newAdmin); // expression which will be true if the document created contains the body that was sent
        done();
      })
      .catch(done);
  });

  it("Updates an estate admin", done => {
    let newAdmin: EstateAdminAttributes = {
      name: "johnny doese",
      email: "johnpo@test.com",
      phoneNumber: "+2348049835094",
      address: "24 Bansxheer Avenue",
      estateType: "Block"
    };
    chai
      .request(server)
      .put(`/api/v1/estate-admin/85676`)
      .send(newAdmin)
      .then((res: any) => {
        //TODO Confirm that newAdmin.id = req.params.id
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(newAdmin); // expression which will be true if name equal to john doe
        done();
      })
      .catch(done);
  });

  it("Gets an estate admin by id", done => {
    chai
      .request(server)
      .get(`/api/v1/estate-admin/85676`)
      .then((res: any) => {
        //TODO Confirm that res.body.data.id = req.params.id
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });
  it("Gets all estate admins ", done => {
    chai
      .request(server)
      .get(`/api/v1/estate-admin/`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.isArray(res.body.data); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });
});
