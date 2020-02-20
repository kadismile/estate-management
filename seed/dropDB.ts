import { sequelize } from "../models";

const eraseDatabaseOnSync = true;

export const syncDb = async () => {
    await sequelize.sync();
}

