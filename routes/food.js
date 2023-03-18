const express = require('express');

const foodAPI = require('../API/food')
const food = express.Router();

food.route('/food').get(foodAPI.apiController);

module.exports = food