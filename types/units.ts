
import * as Sequelize from 'sequelize';

export interface UnitsAttributes {
    id?: number;
    rentedAt: string;
    expiresAt: string;
    type: string;
    address: string;
    tenantId: number;
    estateAdminId: number;
}

export interface UnitInstance extends Sequelize.Instance<UnitsAttributes>, UnitsAttributes {}