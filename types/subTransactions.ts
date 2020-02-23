import * as Sequelize from 'sequelize';

export interface SubTransactionAttributes {
  id?: number;
  transactionId: number,
  subTenantId: number;
  status: string;
  type: string;
  amount: number;
  outstandingAmount: number;
  description: string;
}

export interface SubTransactionInstance extends Sequelize.Instance<SubTransactionAttributes>, SubTransactionAttributes {
};