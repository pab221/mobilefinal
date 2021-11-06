const express = require('express');
const Film = require('../models/Film.js');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Front Page' });
});
router.get('/user/:user/weather', function(req, res, next) {
  res.render('weather', { title: 'Front Page' });
});


module.exports = router;
