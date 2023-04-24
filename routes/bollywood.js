const express = require('express')
// const bollywoodAPI = require('../API/bollywood')
const bollywoodController = require('../controllers/bollywood');


const bollywood = express.Router();

bollywood.route('/bollywoodAdd').post(bollywoodController.insertToBollywoodDB);
bollywood.route('/bollywood').get(bollywoodController.findInBollwoodData);

module.exports = bollywood;