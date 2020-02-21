import * as Sequelize from "sequelize";
import { EstateAdminInstance, EstateAdminAttributes } from "../estateAdmin";
import { UnitInstance, UnitsAttributes } from "../units";
import { EstateTenantInstance, EstateTenantAttributes } from "../estateTenants";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  EstateAdmins: Sequelize.Model<EstateAdminInstance, EstateAdminAttributes>;
  Units: Sequelize.Model<UnitInstance, UnitsAttributes>;
  EstateTenants: Sequelize.Model<EstateTenantInstance, EstateTenantAttributes>;
}