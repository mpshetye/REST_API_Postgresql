const Sequelize = require("sequelize");
 module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "postgres",
  });