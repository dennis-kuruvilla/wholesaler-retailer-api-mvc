//RUN THIS TO CREATE A DB AND POPULATE WITH DATA

const sequelize = require("./util/database");

const Retailer = require("./models/retailer");
const Wholesaler = require("./models/wholesaler");
const Stock = require("./models/stock");

Wholesaler.belongsToMany(Retailer, { through: Stock,foreignKey :  'wholesaler_id' } );
Retailer.belongsToMany(Wholesaler, { through: Stock, foreignKey :  'retailer_id' });
// Wholesaler.hasMany(Retailer)

sequelize.sync({force: true})
// sequelize.sync()
.then((result)=>{
    console.log("success:",result)
    return Wholesaler.bulkCreate([{wholesaler_name: "W1",mobile: "9911223344"},
    {wholesaler_name: "W2",mobile: "9911223355"},{wholesaler_name: "W3",mobile: "9911223366"},
    {wholesaler_name: "W4",mobile: "9911223377"},{wholesaler_name: "W5",mobile: "9911223388"}
])
})
.then((result)=>{
    console.log("success:",result)
    return Retailer.bulkCreate([{retailer_name: "R1",mobile: "8911223344"},
    {retailer_name: "R2",mobile: "8911223355"},{retailer_name: "R3",mobile: "8911223366"},
    {retailer_name: "R4",mobile: "8911223377"},{retailer_name: "R5",mobile: "8911223388"}
])
})
.then((result)=>{
    console.log("success:",result)
    return Stock.bulkCreate([{stock_amount: 50,date: "2021-01-01T00:00:00.646Z",wholesaler_id: 1,retailer_id: 1},
    {stock_amount: 60,date: "2021-02-01T00:00:00.646Z",wholesaler_id: 1,retailer_id: 3},
    {stock_amount: 40,date: "2021-03-01T00:00:00.646Z",wholesaler_id: 2,retailer_id: 2},
    {stock_amount: 30,date: "2021-04-01T00:00:00.646Z",wholesaler_id: 3,retailer_id: 3},
    {stock_amount: 40,date: "2021-06-01T00:00:00.646Z",wholesaler_id: 3,retailer_id: 4},
    {stock_amount: 40,date: "2021-08-01T00:00:00.646Z",wholesaler_id: 5,retailer_id: 4},
    {stock_amount: 40,date: "2021-012-01T00:00:00.646Z",wholesaler_id: 5,retailer_id: 5},])
})
.then((res)=>console.log("add success",res))
.catch((error)=>console.log("error",error))
.finally(()=> process.exit())

//2021-12-29T18:44:03.646Z