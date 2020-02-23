
import * as Sequelize from 'sequelize';

export interface SubTenantAttributes {
    id?: number;
    estateTenantId: number;
    name: string;
    phoneNumber: string;
    tenantType: string;
    account: number;
    email: string;
    address: string;
  }
  
  export interface SubTenantInstance extends Sequelize.Instance<SubTenantAttributes>, SubTenantAttributes {
  };