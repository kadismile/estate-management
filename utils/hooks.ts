import * as Sequelize from "sequelize";
import firebase  from "../firebase";

let db = firebase.firestore();

exports.EstateAdminAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection('EstateAdmins').doc(`${data.name}`);
    await docRef.set(data.dataValues);
  });
};

exports.UnitsAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection('Units').doc(`${data.type}`);
    await docRef.set(data.dataValues);
  });
};
