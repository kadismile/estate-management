import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
import { VisitorInstance, VisitorAttributes } from "../types/visitor";
const { VisitorsAfterCreate } = require("../utils/hooks");
export const VisitorFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<VisitorInstance, VisitorAttributes> => {
  const attributes: SequelizeAttributes<VisitorAttributes> = {
    visitCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        not: ["[a-z]", "i"]
      }
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tenantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subTenantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  };
  const Visitor = sequelize.define<VisitorInstance, VisitorAttributes>(
    "visitors",
    attributes
  );
  // Visitor.associate = models => {
  //   Visitor.belongsTo(models.SubTenant);
  // };
  //fire hooks
  VisitorsAfterCreate(Visitor);
  return Visitor;
};
