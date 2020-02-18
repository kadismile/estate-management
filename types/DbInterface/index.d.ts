import * as Sequelize from "sequelize";
import { EstateAdminInstance, EstateAdminAttributes } from "../estateAdmin";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  EstateAdmins: Sequelize.Model<EstateAdminInstance, EstateAdminAttributes>;
}