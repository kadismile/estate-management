import * as Sequelize from "sequelize";
import firebase  from "../firebase";
import uuid from 'uuid';

const bcrypt = require('bcryptjs');
let db = firebase.firestore();
let id = uuid.v4();

exports.EstateAdminAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection('EstateAdmins').doc(id);
    await docRef.set(data.dataValues);
  });
};

exports.EstateAdminBeforeCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.beforeCreate(async (data, options) => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
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

exports.EstateTenantsBeforeCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.beforeCreate(async (data, options) => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
  });
};

exports.VisitorsAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection(`visitors`).doc(id);
    await docRef.set(data.dataValues);
  });
};

exports.SubTenantsAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection(`SubTenants`).doc(id);
    await docRef.set(data.dataValues);
  });
};

exports.SubTenantsBeforeCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.beforeCreate(async (data, options) => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
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