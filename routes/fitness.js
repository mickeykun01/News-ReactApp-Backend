const express = require('express');

const fitnessController = require('../controllers/fitness')
const fitness = express.Router();


fitness.route('/fitness').get(fitnessController.findInFitnessData)

module.exports = fitness