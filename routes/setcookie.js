var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('name','Mani',{ maxAge: 900000 });
  res.cookie('age','35',{maxAge: 900000});
 res.render('cookie', { msg: 'Cookie set!!'});
});

module.exports = router;
