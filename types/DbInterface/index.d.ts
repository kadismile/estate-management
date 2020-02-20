import * as Sequelize from "sequelize";
import { EstateAdminInstance, EstateAdminAttributes } from "../estateAdmin";
import { UnitInstance, UnitsAttributes } from "../units";
import { EstateTenantInstance, EstateTenantAttributes } from "../estateTenants";
import { VisitorInstance, VisitorAttributes } from "../visitor";
import { SubTenantInstance, SubTenantAttributes } from "../subTenants";
import { TransactionInstance, TransactionAttributes } from "../transactions";
import { SubTransactionInstance, SubTransactionAttributes } from "../subTransactions";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  EstateAdmins: Sequelize.Model<EstateAdminInstance, EstateAdminAttributes>;
  Units: Sequelize.Model<UnitInstance, UnitsAttributes>;
  EstateTenants: Sequelize.Model<EstateTenantInstance, EstateTenantAttributes>;
  Visitors: Sequelize.Model<VisitorInstance, VisitorAttributes>;
  SubTenants: Sequelize.Model<SubTenantInstance, SubTenantAttributes>;
  Transactions: Sequelize.Model<TransactionInstance, TransactionAttributes>;
  SubTransactions: Sequelize.Model<SubTransactionInstance, SubTransactionAttributes>;
}