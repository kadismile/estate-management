import { EstateAdminAttributes } from "../types/estateAdmin";

const server = require("../server");
import "mocha";
import chai from "chai";
import chaiHttp = require("chai-http");
chai.use(chaiHttp);

export const estateAdminTests = () =>
  describe("Describe the basic nature of what are the series of test cases here", () => {
    it("Creates an estate admin", done => {
      let newAdmin: EstateAdminAttributes = {
        // id: Math.floor(Math.random() *1000),
        name: "johnny doslese",
        email: "johndalapo@test.com",
        phoneNumber: "+2348049835094",
        address: "24 Bansxheer Avenue",
        estateType: "Block",
        roles: ["admin"],
        password: "111222333",
        model: "EstateAdmins"
      };
      chai
        .request(server)
        .post("/api/v1/estate-admin/create")
        .send(newAdmin)
        .then((res: any) => {
          chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
          delete newAdmin.password;
          chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
          chai.expect(res.body.data).to.deep.include(newAdmin); // expression which will be true if the document created contains the body that was sent
          done();
        })
        .catch(done);
    });
    it("Updates an estate admin", done => {
      let newAdmin: EstateAdminAttributes = {
        name: "johnny doese",
        email: "johnuypo@test.com",
        phoneNumber: "+2348099835094",
        address: "24 Bansxheer Avenue",
        estateType: "Block",
        roles: ["admin"],
        model: "EstateAdmins"
      };
      chai
        .request(server)
        .put(`/api/v1/estate-admin/1`)
        .send(newAdmin)
        .then((res: any) => {
          //TODO Confirm that newAdmin.id = req.params.id
          chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
          chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
          chai.expect(res.body.data).to.deep.include(newAdmin); // expression which will be true if the document created contains the body that was sent
          done();
        })
        .catch(done);
    });
    it("Gets an estate admin by id", done => {
      chai
        .request(server)
        .get(`/api/v1/estate-admin/1`)
        .then((res: any) => {
          //TODO Confirm that res.body.data.id = req.params.id
          chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
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
          chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
          chai.assert.isArray(res.body.data); // assertion expression which will be true if id exists
          done();
        })
        .catch(done);
    });
  });
