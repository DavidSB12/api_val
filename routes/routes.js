const express = require('express');
const router = express.Router();
const {getJsonData} = require("../controller/apiController")

router.get("/apiVlc", getJsonData)

module.exports = router;