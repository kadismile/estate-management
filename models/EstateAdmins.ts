import * as Sequelize from "sequelize";
import { SequelizeAttributes } from '../types/sequelizeAttributes';
import {
  EstateAdminInstance,
  EstateAdminAttributes
} from "../types/estateAdmin";
export const EstateAdminFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<EstateAdminInstance, EstateAdminAttributes> => {
  const attributes : SequelizeAttributes<EstateAdminAttributes> = {
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
    }
  }
  const EstateAdmin = sequelize.define<
    EstateAdminInstance,
    EstateAdminAttributes
  >("EstateAdmin", attributes);
  /*EstateAdmins.associate = models => {
  EstateAdmins.belongsTo(models.User);
};*/
  return EstateAdmin;
};
// export default estateAdmin;
