var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AR Experiment' });
});

router.get('/ARmarker', function(req, res, next) {
  res.render('ARmarker');
});

module.exports = router;
