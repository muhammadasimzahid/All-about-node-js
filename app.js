var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('index');
});

app.get('/users/:username', function(req, res, next){
    if(req.params.username === 'asim'){
        next();
    }else{
        res.send(req.params.username + '\'s profile.')
    }
});

//same as above just used to show the special error middleware.
app.get('/bakri/:name', function(req, res, next){
    if(req.params.name === 'leli'){
        var error = new Error('User with ' + req.params.name + ' username not found in database.');
        error.status = 404;
        next(error);
    }else{
        res.send(req.params.name + '\'s profile.')
    }
});


app.use(function(error, req, res, next){
    res.status(error.status);
    res.send(error.message);
});


app.use(function(req, res){
    res.send(404, '4-o-4 error');
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});