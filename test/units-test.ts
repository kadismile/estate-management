import {UnitsAttributes} from "../types/units";


const server = require("../server");
import "mocha";
import chai from "chai";
import chaiHttp = require("chai-http");
chai.use(chaiHttp);
describe("Describe the basic nature of what are the series of test cases here", () => {
  it("Creates a Unit", done => {
    let newUnit: UnitsAttributes = {
      rentedAt: "2017-06-28T08:51:29.000Z",
      expiresAt: "2020-06-28T08:51:29.000Z",
      tenantId: 1,
      type: "Boys Quarters",
      address: "Small Estate",
      estateAdminId: 2
    };
    chai
      .request(server)
      .post("/api/v1/units/create")
      .send(newUnit)
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(newUnit); // expression which will be true if the document created contains the body that was sent
        done();
      })
      .catch(done);
  });
  it("Updates a Unit", done => {
    let newUnit = {
      type: "Ibadan",
      tenantId: 7
    };
    chai
      .request(server)
      .put("/api/v1/units/1")
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        done();
      })
      .catch(done);
  });
  it("Gets a Unit By Id", done => {
    chai
      .request(server)
      .get("/api/v1/units/1")
      .then((res: any) => {
        chai.expect(res.status).to.eql(200);
        chai.assert.exists(res.body.data.id);
        done();
      })
      .catch(done);
  });
  it("Gets all Units ", done => {
    chai
      .request(server)
      .get(`/api/v1/units/`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.isArray(res.body.data); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });
});