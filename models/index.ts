import { DbInterface } from "../types/DbInterface";
import Sequelize from "sequelize";
import { EstateAdminFactory } from "./EstateAdmins";
import { UnitsFactory } from "./Units";
import config from "../config";
import { EstateTenantFactory } from "./EstateTenants";
import { VisitorFactory } from "./Visitors";
import { SubTenantFactory } from "./SubTenants";
import { TransactionFactory } from "./Transactions";
import { SubTransactionFactory } from "./SubTransactions";

const env = process.env.NODE_ENV || "development";
console.log(config[env].database);
const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    // host: config[env].host ?? null,
    // port: config[env].port ?? null,
    dialect: "postgres"
  }
);

const models: DbInterface = {
  sequelize,
  Sequelize,
  EstateAdmins: EstateAdminFactory(sequelize, Sequelize),
  Units: UnitsFactory(sequelize, Sequelize),
  EstateTenants: EstateTenantFactory(sequelize, Sequelize),
  Visitors: VisitorFactory(sequelize, Sequelize),
  SubTenants: SubTenantFactory(sequelize, Sequelize),
  Transactions: TransactionFactory(sequelize, Sequelize),
  SubTransactions: SubTransactionFactory(sequelize, Sequelize)
};
Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});
export { sequelize };
export default models;
