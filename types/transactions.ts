import * as Sequelize from 'sequelize';

export interface TransactionAttributes {
  id?: number;
  tenantId: number;
  status: string;
  type: string;
  amount: number;
  outstandingAmount: number;
  description: string;
}

export interface TransactionInstance extends Sequelize.Instance<TransactionAttributes>, TransactionAttributes {
};