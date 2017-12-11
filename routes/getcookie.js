var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('cookie', { msg: 'name: ' + req.cookies.name + '   age: ' 
                                 + req.cookies.age});
});

module.exports = router;
