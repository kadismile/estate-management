import {VisitorAttributes} from "../types/visitor";

const server = require("../server");
import "mocha";
import chai from "chai";
import chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Describe the basic nature of what are the series of test cases here", () => {
  it("Creates a visitor", done => {
    let visitor: VisitorAttributes = {
      // id: Math.floor(Math.random() *1000),

      subTenantId: 1,
      tenantId: 1,
      phoneNumber: "+23483456835094",
      expiryDate: "2020-06-28T08:51:29.000Z",
      visitCode: "Flat Owner"
    };
    chai
      .request(server)
      .post("/api/v1/visitors/create")
      .send(visitor)
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(visitor); // expression which will be true if the document created contains the body that was sent
        done();
      })
      .catch(done);
  });
  it("Updates a visitor", done => {
    let update: VisitorAttributes = {
      // id: Math.floor(Math.random() *1000),
      subTenantId: 1,
      tenantId: 1,
      phoneNumber: "+234834552435094",
      expiryDate: "2020-06-28T08:51:29.000Z",
      visitCode: "Flat Owner"
    };
    chai
      .request(server)
      .put(`/api/v1/visitors/1`)
      .send(update)
      .then((res: any) => {
        //TODO Confirm that newAdmin.id = req.params.id
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(update); // expression which will be true if name equal to john doe
        done();
      })
      .catch(done);
  });
  it("Gets an visitor  by id", done => {
    chai
      .request(server)
      .get(`/api/v1/visitors/1`)
      .then((res: any) => {
        //TODO Confirm that res.body.data.id = req.params.id
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });
  it("Gets all visitors ", done => {
    chai
      .request(server)
      .get(`/api/v1/visitors/`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.isArray(res.body.data); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });

});