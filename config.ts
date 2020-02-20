export default {
  development: {
    database: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
  },
  test: {
    database: process.env.TEST_DB_NAME,
    username: process.env.TEST_DB_USER,
    // password: process.env.TEST_DB_PASS,
    // port: process.env.TEST_DB_PORT,
    // host: process.env.TEST_DB_HOST
  },
  production: {
    database: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
  }
};
