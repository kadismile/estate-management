import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
const { SubTransactionAfterCreate } =  require('../utils/hooks');
import {
  SubTransactionInstance,
  SubTransactionAttributes
} from "../types/subTransactions";

export const SubTransactionFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<SubTransactionInstance, SubTransactionAttributes> => {
  const attributes: SequelizeAttributes<SubTransactionAttributes> = {
    transactionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subTenantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    outstandingAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  };
  const SubTransaction = sequelize.define<
    SubTransactionInstance,
    SubTransactionAttributes
    >("transactions", attributes);
  SubTransaction.associate = models => {
    SubTransaction.belongsTo(models.SubTenants);
  };

  //fire hooks
  SubTransactionAfterCreate(SubTransaction);
  return SubTransaction;
};
