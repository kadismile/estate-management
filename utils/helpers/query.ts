import * as Sequelize from "sequelize";
import {Request} from "express";


exports.findById = async (Model: Sequelize.Model<any, any> , id: string) => {
  const resource = await Model.findOne({
    where: { id: id }
  });
  if (resource) {
    return resource;
  }
  return null;
};

exports.findAll = async (Model : Sequelize.Model<any, any> ) => {
  const resource = await Model.findAll();
  if (resource) {
    return resource;
  }
  return null;
};

exports.updateById = async (Model: Sequelize.Model<any, any> , req: Request ) => {
  let updatedDoc = await Model.update(
    req.body, {returning: true, where: {id: req.params.id}
  });
  return updatedDoc[1][0] !== null ? updatedDoc[1][0] : null;
};
