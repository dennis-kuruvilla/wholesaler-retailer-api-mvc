const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Retailer = require("./retailer");
const Wholesaler = require("./wholesaler");

const Stock = sequelize.define('Stock', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
    // retailer_id: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Retailer, // 'Movies' would also work
    //     key: 'retailer_id'
    //   }
    // },
    // wholesaler_id: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Wholesaler, // 'Actors' would also work
    //     key: 'wholesaler_id'
    //   }
    // },
    stock_amount: {
        type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE
    }
  });

  module.exports = Stock;