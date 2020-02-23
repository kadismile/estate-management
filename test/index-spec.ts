import { EstateAdminAttributes } from "../types/estateAdmin";
import { UnitsAttributes } from "../types/units";
import { EstateTenantAttributes } from "../types/estateTenants";
import { SubTenantAttributes } from "../types/subTenants";
import { TransactionAttributes } from "../types/transactions";
import { SubTransactionAttributes } from "../types/subTransactions";

const server = require("../server");
import { dropDb } from "../seed/dropDB";

import "mocha";
import chai, { expect, assert } from "chai";
import chaiHttp = require("chai-http");
import { VisitorAttributes } from "../types/visitor";

chai.use(chaiHttp);

describe("test", () => {
  it("should return a string", () => {
    expect("ci with travis").to.equal("ci with travis");
  });
});

describe("Describe the basic nature of what are the series of test cases here", () => {
  it("Creates an estate admin", done => {
    let newAdmin: EstateAdminAttributes = {
      // id: Math.floor(Math.random() *1000),
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
      email: "johnuypo@test.com",
      phoneNumber: "+2348099835094",
      address: "24 Bansxheer Avenue",
      estateType: "Block"
    };
    chai
      .request(server)
      .put(`/api/v1/estate-admin/1`)
      .send(newAdmin)
      .then((res: any) => {
        //TODO Confirm that newAdmin.id = req.params.id
        chai.expect(res.status).to.eql(200); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
        chai.expect(res.body.data).to.deep.include(newAdmin); // expression which will be true if name equal to john doe
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

  it("Creates an estate tenant", done => {
    let newTenant: EstateTenantAttributes = {
      // id: Math.floor(Math.random() *1000),
      estateAdminId: 1,
      name: "johnny doslese",
      email: "johnssaasadfao@test.com",
      phoneNumber: "+23483456835094",
      address: "24 Bansxheer Avenue",
      tenantType: "Flat Owner",
      account: 2000
    };
    chai
      .request(server)
      .post("/api/v1/estate-tenants/create")
      .send(newTenant)
      .then((res: any) => {
        chai.expect(res.status).to.eql(201); // expression which will be true if response status equal to 201
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
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
      account: 2000
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
        chai.assert.exists(res.body.data.id); // assertion expression which will be true if id exists
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
  it("Updates an estate tenant", done => {
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
  it("Gets an estate tenant by id", done => {
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
  it("Gets all estate tenants ", done => {
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
  it("Creates an Sub tenant", done => {
    let newTenant: SubTenantAttributes = {
      // id: Math.floor(Math.random() *1000),
      estateTenantId: 1,
      name: "johnny doslese",
      email: "johnssaasadfao@test.com",
      phoneNumber: "+23483456835094",
      address: "24 Bansxheer Avenue",
      tenantType: "Flat Owner",
      account: 2000
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
      account: 2500
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
