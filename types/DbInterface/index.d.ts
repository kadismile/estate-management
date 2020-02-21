import * as Sequelize from "sequelize";
import { EstateAdminInstance, EstateAdminAttributes } from "../estateAdmin";
import { UnitInstance, UnitsAttributes } from "../units";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  EstateAdmins: Sequelize.Model<EstateAdminInstance, EstateAdminAttributes>;
  Units: Sequelize.Model<UnitInstance, UnitsAttributes>;
}