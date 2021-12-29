const express = require("express");
const router = express.Router();

const { getTurnover ,getRetailer,getMaxTurnover1, getWholesaler} = require("../controllers/controller");



router.post("/1",getWholesaler);

router.get("/2",getRetailer);

router.get("/3", getTurnover);

router.get("/4", getMaxTurnover1);

module.exports = router;
