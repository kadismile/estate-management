const Sequelize = require('sequelize');
const  config  = require('../config').config;

console.log(config.dbName);
const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPass,
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