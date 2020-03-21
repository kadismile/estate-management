import { estateAdminTests } from "./estate-admin-test";
import { estateTenantRouteAuthTests, estateTenantsTests } from "./tenants-test";

(async function() {
  await estateAdminTests();
  await estateTenantRouteAuthTests();
  await estateTenantsTests();
})();
