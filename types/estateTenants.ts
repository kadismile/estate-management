
import * as Sequelize from 'sequelize';

export interface EstateTenantAttributes {
    id?: number;
    estateAdminId: number;
    name: string;
    phoneNumber: string;
    tenantType: string;
    account: number;
    email: string;
    address: string;
    roles: string[];
    password: string,
    model: string
  }
  
  export interface EstateTenantInstance extends Sequelize.Instance<EstateTenantAttributes>, EstateTenantAttributes {
  };