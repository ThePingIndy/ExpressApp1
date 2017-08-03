'use strict';
var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

router.get('/superheros', apiController.get);
router.post('/superheros', apiController.post);
router.get('/superhero/:id', apiController.getSuperhero);
router.put('/superhero/:id', apiController.putSuperhero);
router.delete('/superhero/:id', apiController.deleteSuperhero)

module.exports = router;
