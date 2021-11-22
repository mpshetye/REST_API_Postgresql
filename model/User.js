const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize")
const db = require("../config/database");

//Model
const Playground = db.define(
  "Playground",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    createdAt:{
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt:{
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true, //stop the auto-pluralization performed by Sequelize using the freezeTableName: true option. This way, Sequelize will infer the table name to be equal to the model name, without any modifications
  }
);

Playground.sync().then(() => {
  console.log("table created");
});

module.exports = Playground;
