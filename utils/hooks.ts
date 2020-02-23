import * as Sequelize from "sequelize";
import firebase  from "../firebase";
import uuid from 'uuid';

let db = firebase.firestore();
let id = uuid.v4()

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

exports.VisitorsAfterCreate = async (Model: Sequelize.Model<any, any>) => {
  Model.afterCreate(async (data, options) => {
    let docRef = db.collection(`visitors`).doc(id);
    await docRef.set(data.dataValues);
  });
};
