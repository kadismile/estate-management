const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'postgres',
  },
);
const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
};
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
export { sequelize };
export default models;