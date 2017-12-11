var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Looking for author '});
});
router.post('/',function(req, res, next){
    console.log(req.body.authorname);
    res.end('Written to console');
});

module.exports = router;
