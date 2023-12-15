const csvtojson = require('csvtojson');

const csvFilePath = './fuentes-datos/CV.csv';

const convertCsvToJson = async () => {
    try {
      const jsonData = await csvtojson({ delimiter: ';', }).fromFile(csvFilePath);
      return jsonData;
    } catch (err) {
      console.error('Error al procesar el archivo XML:', err);
      throw err; // Propaga el error para que pueda ser manejado por el llamador
    }
  }

module.exports = {convertCsvToJson}