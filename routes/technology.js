const express = require('express')
const technologyControllers = require('../controllers/technology')

const technology = express.Router();

technology.route('/technology').get(technologyControllers.findInTechnologyData);

module.exports = technology;