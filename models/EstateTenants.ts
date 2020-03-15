import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
import {
  EstateTenantInstance,
  EstateTenantAttributes
} from "../types/estateTenants";
const { EstateTenantsBeforeCreate } =  require('../utils/hooks');
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
    roles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ["estateTenant"],
      validate: {
        isValidArray: function(value) {
          let validRoles = ["estateTenant"];
          let inValidItems = value.filter(val => !validRoles.includes(val));
          if (inValidItems.length > 0) {
            throw new Error("Invalid Role Type Specified");
          }
          return value;
        }
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 5,
      },
    },
    model: {
      type: DataTypes.STRING,
      defaultValue: "Estatetenants",
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
  EstateTenantsBeforeCreate(EstateTenant);
  return EstateTenant;
};
