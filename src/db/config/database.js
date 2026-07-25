const config = require('../../config/config').sqlDB;

module.exports = {
  development: {
    username: config.user,
    password: config.password,
    database: config.database,
    host: config.host,
    dialect: config.dialect,
  },
  test: {
    username: config.user,
    password: config.password,
    database: config.database,
    host: config.host,
    dialect: config.dialect,
  },
  production: {
    username: config.user,
    password: config.password,
    database: config.database,
    host: config.host,
    dialect: config.dialect,
  },
};