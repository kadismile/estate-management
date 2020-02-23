import * as Sequelize from "sequelize";
import firebase  from "../firebase";
import uuid from 'uuid';

let db = firebase.firestore();
const id = uuid.v4();

exports.EstateAdminAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection('EstateAdmins').doc(id);
    await docRef.set(data.dataValues);
  });
};

exports.UnitsAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection('Units').doc(id);
    await docRef.set(data.dataValues);
  });
};

exports.EstateTenantsAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection(`EstateTenants`).doc(id);
    await docRef.set(data.dataValues);
  });
};

exports.SubTenantsAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection(`SubTenants`).doc(id);
    await docRef.set(data.dataValues);
  });
};

exports.TransactionAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection(`Transactions`).doc(id);
    await docRef.set(data.dataValues);
  });
};

exports.SubTransactionAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection(`SubTransactions`).doc(id);
    await docRef.set(data.dataValues);
  });
};