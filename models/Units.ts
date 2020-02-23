import * as Sequelize from "sequelize";
import {SequelizeAttributes} from "../types/sequelizeAttributes";
import {UnitInstance, UnitsAttributes} from "../types/units";
const { UnitsAfterCreate } =  require('../utils/hooks');

export const UnitsFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<UnitInstance, UnitsAttributes> => {
  const attributes: SequelizeAttributes<UnitsAttributes> = {
    rentedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tenantId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estateAdminId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  };
  const Unit = sequelize.define<UnitInstance, UnitsAttributes>("units", attributes);
  Unit.associate = models => {
    Unit.belongsTo(models.EstateAdmins);
  };
  //fire hooks
  UnitsAfterCreate(Unit);
  return Unit;
};
