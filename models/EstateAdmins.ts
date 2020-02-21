import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
import {EstateAdminInstance, EstateAdminAttributes} from "../types/estateAdmin";
export const EstateAdminFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<EstateAdminInstance, EstateAdminAttributes> => {
  const attributes: SequelizeAttributes<EstateAdminAttributes> = {
    name: {
      type: DataTypes.STRING,
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
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        not: ["[a-z]", "i"]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estateType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };
  const EstateAdmin = sequelize.define<EstateAdminInstance, EstateAdminAttributes>("estates", attributes);
  EstateAdmin.associate = models => {
    EstateAdmin.hasMany(models.Units);
  };
  return EstateAdmin;

};
