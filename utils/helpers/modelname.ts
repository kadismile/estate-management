import models from "../../models";
exports.modelName = (model: string) => {
  let name;
  switch (model) {
   case model = 'EstateAdmins':
      name = models.EstateAdmins;
      break;
    case model = 'EstateTenants':
      name = models.EstateTenants;
      break;
    case model = 'SubTenants':
      name = models.SubTenants;
      break;
    default:
      name = undefined;
  }
  return name
};