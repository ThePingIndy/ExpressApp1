'use strict';
var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController');

router.get('/', gameController.get);

module.exports = router;