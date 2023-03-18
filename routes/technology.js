const express = require('express')
const technologyAPI = require('../API/technology')

const technology = express.Router();

technology.route('/technology').get(technologyAPI.apiController);

module.exports = technology;