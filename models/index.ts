import { DbInterface } from "../types/DbInterface";
import Sequelize from "sequelize";
import { EstateAdminFactory } from "./EstateAdmins";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
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
