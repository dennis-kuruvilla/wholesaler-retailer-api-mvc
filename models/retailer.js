const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Retailer = sequelize.define("retailer", {
  retailer_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  retailer_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Retailer;