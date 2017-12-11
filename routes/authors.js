var express = require('express');
var router = express.Router();

/* GET authors page. */
router.get('/', function(req, res, next) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; 
    
    var usersURL = 'https://jsonplaceholder.typicode.com/users';
    var postsURL = 'https://jsonplaceholder.typicode.com/posts';

    var usersreq = new XMLHttpRequest();
    var postsreq = new XMLHttpRequest();

    usersreq.responseType = 'json';
    postsreq.responseType = 'json';
    
    myH1 = 'Authors and No of posts';
    var authorsList = new Array();

    usersreq.open('GET', usersURL);
    usersreq.responseType = 'json';

    usersreq.send();
    usersreq.onload = function(){
        var users = JSON.parse(usersreq.responseText);
        
        postsreq.open('GET', postsURL);
        postsreq.send(); 

        postsreq.onload = function(){
            var posts = JSON.parse(postsreq.responseText);

            for (var i=0; i < users.length; i++){
                var postscnt = 0;
                for (var j=0; j < posts.length; j++){
                    if (users[i].id === posts[j].userId){
                        postscnt++;
                    }
                }
                authorsList[i] = users[i].name + ' -> ' + postscnt;
            }
            res.render('authors', { title: myH1,
                          authorsDetails: authorsList });
        }
    }
});

module.exports = router;
