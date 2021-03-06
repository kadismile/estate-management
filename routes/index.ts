const estateAdmins = require('./estateAdmin');
const units = require('./units');
const estateTenants = require('./estateTenants')
const visitors = require('./visitor')
const subTenants = require('./subTenants');
const transactions = require('./transactions');
const subTransactions = require('./subTransactions');
const auth = require('./auth');
module.exports = {
    estateAdmins,
    units,
    estateTenants,
    visitors,
    subTenants,
    transactions,
    subTransactions,
    auth
};