import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
const { SubTenantsAfterCreate } =  require('../utils/hooks');
import {
  SubTenantInstance,
  SubTenantAttributes
} from "../types/subTenants";

export const SubTenantFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<SubTenantInstance, SubTenantAttributes> => {
  const attributes: SequelizeAttributes<SubTenantAttributes> = {
    estateTenantId: {
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
  const SubTenant = sequelize.define<
  SubTenantInstance,
    SubTenantAttributes
  >("subtenants", attributes);
  SubTenant.associate = models => {
    SubTenant.belongsTo(models.EstateTenants);
  };

  //fire hooks
  SubTenantsAfterCreate(SubTenant);
  return SubTenant;
};
