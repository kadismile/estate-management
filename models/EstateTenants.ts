import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
import {
  EstateTenantInstance,
  EstateTenantAttributes
} from "../types/estateTenants";
const { EstateTenantsAfterCreate } =  require('../utils/hooks');
export const EstateTenantFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<EstateTenantInstance, EstateTenantAttributes> => {
  const attributes: SequelizeAttributes<EstateTenantAttributes> = {
    estateAdminId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        not: ["[a-z]", "i"]
      }
    },
    tenantType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      account: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
  };
  const EstateTenant = sequelize.define<
  EstateTenantInstance,
    EstateTenantAttributes
  >("tenants", attributes);
  EstateTenant.associate = models => {
    EstateTenant.belongsTo(models.EstateAdmins);
  };
//fire hooks
  // EstateTenantsAfterCreate(EstateTenant);
  return EstateTenant;
};
