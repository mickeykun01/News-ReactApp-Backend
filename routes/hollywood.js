const express = require('express')
const hollwoodController = require('../controllers/hollywood')

const hollywood = express.Router();

hollywood.route('/hollywood').get(hollwoodController.findInHollywoodData);

module.exports = hollywood;