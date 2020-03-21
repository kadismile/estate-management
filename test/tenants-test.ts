import { EstateTenantAttributes } from "../types/estateTenants";

import "mocha";
import chai, { expect, assert } from "chai";
import chaiHttp = require("chai-http");
import { EstateAdminAttributes } from "../types/estateAdmin";
chai.use(chaiHttp);
const server = require("../server");

let token;

export const estateTenantRouteAuthTests = () =>
  describe("Describe the basic nature of what are the series of test cases here", () => {
    it("Gets Auth Details for an admin", done => {
      let admin: EstateAdminAttributes = {
        // id: Math.floor(Math.random() *1000),
        name: "johnny doslese",
        email: "johnuypo@test.com",
        phoneNumber: "+2348049835094",
        address: "24 Bansxheer Avenue",
        estateType: "Block",
        roles: ["admin"],
        password: "111222333",
        model: "EstateAdmins"
      };
      let { email, password } = admin;
      chai
        .request(server)
        .post("/api/v1/auth/login")
        .set({ modelname: "EstateAdmins" })
        .send({ email, password })
        .then((res: any) => {
          chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
          token = res.body.data.token;
          // chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
          // chai.expect(res.body.data).to.deep.include(newTenant); // expression which will be true if the document created contains the body that was sent
          done();
        })
        .catch(done);
    });
  });

export const estateTenantsTests = () =>
  describe("Describe the basic nature of what are the series of test cases here", () => {
    it("Creates an estate tenant", done => {
      let newTenant: EstateTenantAttributes = {
        // id: Math.floor(Math.random() *1000),
        estateAdminId: 1,
        name: "johnny doslese",
        email: "johnssaasadfao@test.com",
        phoneNumber: "+23483456835094",
        address: "24 Bansxheer Avenue",
        tenantType: "Flat Owner",
        account: 2000,
        roles: ["estateTenant"],
        password: "111222",
        model: "EstateTenants"
      };
      chai
        .request(server)
        .post("/api/v1/estate-tenants/create")
        .send(newTenant)
        .set("Authorization", `Bearer ${token}`)
        .then((res: any) => {
          chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
          chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
          delete newTenant.password;
          chai.expect(res.body.data).to.deep.include(newTenant); // expression which will be true if the document created contains the body that was sent
          done();
        })
        .catch(done);
    });
    it("Updates an estate tenant", done => {
      let update: EstateTenantAttributes = {
        name: "johnny doslese",
        email: "joadcasdspo@test.com",
        phoneNumber: "+234809835094",
        address: "24 Bansxheer Avenue",
        tenantType: "Flat Owner",
        estateAdminId: 1,
        account: 2000,
        roles: ["estateTenant"],
        model: "EstateTenants"
      };
      chai
        .request(server)
        .put(`/api/v1/estate-tenants/1`)
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
    it("Gets an estate tenant by id", done => {
      chai
        .request(server)
        .get(`/api/v1/estate-tenants/1`)
        .then((res: any) => {
          //TODO Confirm that res.body.data.id = req.params.id
          chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
          //chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
          done();
        })
        .catch(done);
    });
    it("Gets all estate tenants ", done => {
      chai
        .request(server)
        .get(`/api/v1/estate-tenants/`)
        .then((res: any) => {
          chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
          chai.assert.isArray(res.body.data); // assertion expression which will be true if id exists
          done();
        })
        .catch(done);
    });
  });
