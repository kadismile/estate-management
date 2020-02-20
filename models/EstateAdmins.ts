import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
import {
  EstateAdminInstance,
  EstateAdminAttributes
} from "../types/estateAdmin";
export const EstateAdminFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<EstateAdminInstance, EstateAdminAttributes> => {
  const attributes: SequelizeAttributes<EstateAdminAttributes> = {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        not: ["[a-z]", "i"]
      }
    },
    address: {
      type: DataTypes.STRING
    },
    estateType: {
      type: DataTypes.STRING
    },
    
  };
  const EstateAdmins = sequelize.define<
    EstateAdminInstance,
    EstateAdminAttributes
  >("estates", attributes, {freezeTableName: true,});
  
  return EstateAdmins;
};
