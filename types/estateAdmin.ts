
import * as Sequelize from 'sequelize';

export interface EstateAdminAttributes {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    estateType: string;
    roles: string[];
    password: string,
    model: string
}
  
  export interface EstateAdminInstance extends Sequelize.Instance<EstateAdminAttributes>, EstateAdminAttributes {
  };