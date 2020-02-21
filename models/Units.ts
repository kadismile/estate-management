import * as Sequelize from "sequelize";
import {SequelizeAttributes} from "../types/sequelizeAttributes";
import {UnitInstance, UnitsAttributes} from "../types/units";

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
            type: DataTypes.STRING,
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
    const Unit = sequelize.define<UnitInstance, UnitsAttributes>("Units", attributes);
    Unit.associate = models => {
        Unit.belongsTo(models.EstateAdmins);
    };
    return Unit;
};
