import * as Sequelize from 'sequelize';

export interface VisitorAttributes {
    id?: number;
    visitCode: string;
    phoneNumber: string;
    expiryDate: string;
    tenantId: number;
    subTenantId: number;
  }
  
  export interface VisitorInstance extends Sequelize.Instance<VisitorAttributes>, VisitorAttributes {
  };