const express = require('express');
const homeAPI = require('../API/home');

const home = express.Router();

home.route('/').get(homeAPI.apiController);

module.exports = home