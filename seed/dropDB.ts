import { sequelize } from "../models";

const eraseDatabaseOnSync = true;

export const dropDb = async () => {
    await sequelize.sync();
}

