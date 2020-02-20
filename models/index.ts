import { DbInterface } from "../types/DbInterface";
import Sequelize from "sequelize";
import { EstateAdminFactory } from "./EstateAdmins";
import config from "../config";

const env = process.env.NODE_ENV || "development";
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
  EstateAdmins: EstateAdminFactory(sequelize, Sequelize)
};
Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});
export { sequelize };
export default models;
