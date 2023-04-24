const express = require('express');
const homeController = require('../controllers/home')

const home = express.Router();

home.route('/').get(homeController.findInHomeData);

module.exports = home