import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
const { SubTenantsBeforeCreate } =  require('../utils/hooks');
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
    roles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ["subTenant"],
      validate: {
        isValidArray: function(value) {
          let validRoles = ["subTenant"];
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
      defaultValue: "SubTenants",
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
  SubTenantsBeforeCreate(SubTenant);
  return SubTenant;
};
