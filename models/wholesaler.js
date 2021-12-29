const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Wholesaler = sequelize.define("wholesaler", {
  wholesaler_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  wholesaler_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Wholesaler;