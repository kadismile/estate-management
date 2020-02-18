
import * as Sequelize from 'sequelize';

export interface EstateAdminAttributes {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    estateType: string;
  }
  
  export interface EstateAdminInstance extends Sequelize.Instance<EstateAdminAttributes>, EstateAdminAttributes {
  };