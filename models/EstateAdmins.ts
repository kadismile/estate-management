import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
import {EstateAdminInstance, EstateAdminAttributes} from "../types/estateAdmin";
const { EstateAdminBeforeCreate } =  require('../utils/hooks');
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
    },
    roles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
        /*get: function() {
            return this.getDataValue('roles');
        }, 
        set: function(val) {
         return this.setDataValue('roles', Object.values(val) );
        },*/
      defaultValue: ["admin"],
      validate: {
        isValidArray: function(value) {
          let validRoles = ["admin", "user"];
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
      defaultValue: "EstateAdmins",
    },
  };
  const EstateAdmin = sequelize.define<EstateAdminInstance, EstateAdminAttributes>("estates", attributes);
  EstateAdmin.associate = models => {
    EstateAdmin.hasMany(models.Units);
  };
  //fire hooks
  // EstateAdminAfterCreate(EstateAdmin);
  EstateAdminBeforeCreate(EstateAdmin);

  return EstateAdmin;

};
