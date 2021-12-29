const Retailer = require("../models/retailer");
const Wholesaler = require("../models/wholesaler");
const Stock = require("../models/stock");
const sequelize = require("../util/database")

const getWSLR = async (wslr) =>{
    const wholesaler =  await Wholesaler.findByPk(wslr);
    const retailers = await Stock.findAll({
        attributes: ['retailer_id'],
        where: {
          wholesaler_id: wslr,
        }
      })
    let retailer_ids = retailers.map(item=>{
        return item.dataValues.retailer_id
    })
    console.log("retailers:",retailer_ids)  
    let retailer_names = await Retailer.findAll({
        attributes: ['retailer_name'],
        where: {
          retailer_id: retailer_ids,
        }
      })

    retailer_names = retailer_names.map(item=>{
        return item.dataValues.retailer_name
    })
    const wslr_details = {
        id: wholesaler.dataValues.wholesaler_id,
        name: wholesaler.dataValues.wholesaler_name,
        mobile: wholesaler.dataValues.mobile,
        associated_retailers: retailer_names
    }

    return wslr_details
}

const getRetailerWithSingleWslr = async () => {
    try{
    result = await sequelize.query('select retailer_id from Stocks group by retailer_id having count(retailer_id) = 1')
    // console.log(result)
    }
    catch(err){
        console.log(err)
    }

    let retailers = result[0].map(item=> item.retailer_id)
    return retailers
}


const getAnnualTurnover = async()=>{
    try{
        let result = await sequelize.query('select wholesaler_id,sum(stock_amount) as sum from Stocks group by wholesaler_id ')
        result=result[0].map(item=>{
            return {
                wholesaler_id: item.wholesaler_id,
                turnover: item.sum
            }
        })
     
        return result
    }
       catch(err){
        console.log(err)
    }
}

const getMaxTurnover = async()=>{
    try{
        let result = await sequelize.query('select wholesaler_id,max(stock_amount) as max from Stocks group by wholesaler_id ')
        result=result[0].map(item=>{
            return {
                wholesaler_id: item.wholesaler_id,
                max_turnover: item.max
            }
        })
        return result

    }
       catch(err){
        console.log(err)
    }
}

module.exports={getWSLR,getRetailerWithSingleWslr,getAnnualTurnover,getMaxTurnover}