const estateAdmin = (sequelize, DataTypes) => {
const EstateAdmin = sequelize.define('EstateAdmin', {
  name: {
    type:DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      not: ["[a-z]",'i'],
    }
  },
  address: {
    type: DataTypes.STRING
  },
  estateType: {
    type: DataTypes.STRING
  }
});
/*EstateAdmins.associate = models => {
  EstateAdmins.belongsTo(models.User);
};*/
return EstateAdmin;
};
export default estateAdmin;