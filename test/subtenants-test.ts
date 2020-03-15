import {SubTenantAttributes} from "../types/subTenants";
const server = require("../server");


import "mocha";
import chai from "chai";
import chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Describe the basic nature of what are the series of test cases here", () => {
  it("Creates an Sub tenant", done => {
    let newTenant: SubTenantAttributes = {
      // id: Math.floor(Math.random() *1000),
      estateTenantId: 1,
      name: "johnny doslese",
      email: "johnssaasadfao@test.com",
      phoneNumber: "+23483456835094",
      address: "24 Bansxheer Avenue",
      tenantType: "Flat Owner",
      account: 2000,
      roles: ['subTenant'],
      password: "111222",
      model: "SubTenants"
    };
    chai
      .request(server)
      .post("/api/v1/sub-tenants/create")
      .send(newTenant)
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(newTenant); // expression which will be true if the document created contains the body that was sent
        done();
      })
      .catch(done);
  });
  it("Updates a Sub tenant", done => {
    let update: SubTenantAttributes = {
      name: "kadi dosslese",
      email: "kaddi@test.com",
      phoneNumber: "+2348098355094",
      address: "24 Bansxhesder Avenue",
      tenantType: "Flat Owner",
      estateTenantId: 1,
      account: 2500,
      roles: ['subTenant'],
      password: "111222",
      model: "SubTenants"
    };
    chai
      .request(server)
      .put(`/api/v1/sub-tenants/1`)
      .send(update)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(update);
        done()
      });
  });
  it("Gets a Sub tenant by id", done => {
    chai
      .request(server)
      .get(`/api/v1/sub-tenants/1`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });
  it("Gets all Sub tenants ", done => {
    chai
      .request(server)
      .get(`/api/v1/sub-tenants/`)
      .then((res: any) => {
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.isArray(res.body.data); // assertion expression which will be true if id exists
        done();
      })
      .catch(done);
  });

});