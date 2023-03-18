const express = require('express');

const fitnessAPI = require('../API/fitness')
const fitness = express.Router();

fitness.route('/fitness').get(fitnessAPI.apiController)

module.exports = fitness