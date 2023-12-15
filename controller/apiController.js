const {convertCsvToJson} = require("../converter/convertCsvToJson.js")


const getJsonData = async (req, res) => {
    const jsonContent = await convertCsvToJson();
    res.status(200).json(jsonContent)    
}

module.exports = {getJsonData}