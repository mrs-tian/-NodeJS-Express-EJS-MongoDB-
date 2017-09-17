var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});

router.get('/position', function(req, res, next) {
  res.redirect('/position.html');
});

module.exports = router;
