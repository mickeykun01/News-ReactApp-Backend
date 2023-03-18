const express = require('express')
const bollywoodAPI = require('../API/bollywood')

const bollywood = express.Router();

bollywood.route('/bollywood').get(bollywoodAPI.apiController);

module.exports = bollywood;