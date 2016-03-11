var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var users = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J' ];

app.param('from', function(req, res, next, from){
    req.from = parseInt(from, 10);
    next();
});

app.param('to', function(req, res, next, to){
    req.to = parseInt(to, 10);
    next();
});

app.get('/users/:from-:to', function(req, res){
    //how to access R.P.P ??? down bellow : 
    res.json(users.slice(req.from, req.to + 1));
    
    //when you are not using Route Parameter Predefined.
    //var from = parseInt(req.params.from, 10);
    //var to = parseInt(req.params.to, 10);
    //res.send(users.slice(from, to + 1));
    
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});