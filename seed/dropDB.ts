import {sequelize} from "../models";

const eraseDatabaseOnSync = true;

export const dropDb = async () => {
  sequelize.sync({force: eraseDatabaseOnSync});
}

