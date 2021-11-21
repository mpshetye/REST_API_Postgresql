const Sequelize = require("sequelize");
 module.exports = new Sequelize("playground", "postgres", "password", {
    host: "localhost",
    dialect: "postgres",
  });