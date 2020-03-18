import {sequelize} from "../models";

const eraseDatabaseOnSync = false;

export const dropDb = async () => {
  sequelize.sync({force: eraseDatabaseOnSync});
}

