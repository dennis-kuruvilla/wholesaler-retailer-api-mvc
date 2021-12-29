

const {getWSLR,getRetailerWithSingleWslr,getAnnualTurnover,getMaxTurnover} = require("../service/services")


const getWholesaler = async (req,res) => {
  const wslr = req.body.wslr
  const result = await getWSLR(wslr)
  return res.json(result)
}


const getTurnover = async (req,res) =>{
  const result = await getAnnualTurnover()
  return res.json(result)
}

const getRetailer = async(req,res)=>{
  const result = await getRetailerWithSingleWslr()
  return res.json(result)
}

const getMaxTurnover1 = async(req,res)=>{
  const result = await getMaxTurnover()
  return res.json(result)
}


module.exports = {
  getTurnover,
  getRetailer,
  getMaxTurnover1,
  getWholesaler
};
