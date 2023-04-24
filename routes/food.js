const express = require('express');

const foodController = require('../controllers/food')
const food = express.Router();

food.route('/food').get(foodController.findInFoodData);

module.exports = food