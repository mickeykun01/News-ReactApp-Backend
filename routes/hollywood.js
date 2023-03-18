const express = require('express')
const hollywoodAPI = require('../API/hollywood')

const hollywood = express.Router();

hollywood.route('/hollywood').get(hollywoodAPI.apiController);

module.exports = hollywood;