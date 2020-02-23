import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../types/sequelizeAttributes";
const { TransactionAfterCreate } =  require('../utils/hooks');
import {
  TransactionInstance,
  TransactionAttributes
} from "../types/transactions";

export const TransactionFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<TransactionInstance, TransactionAttributes> => {
  const attributes: SequelizeAttributes<TransactionAttributes> = {
    tenantId: {
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
  const Transaction = sequelize.define<
  TransactionInstance,
    TransactionAttributes
  >("transactions", attributes);
  Transaction.associate = models => {
    Transaction.belongsTo(models.EstateTenants);
  };

  //fire hooks
  TransactionAfterCreate(Transaction);
  return Transaction;
};
