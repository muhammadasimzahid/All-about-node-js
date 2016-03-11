var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

app.get('/name', function(req, res){
    res.send('Your saved name is : <h2>' + req.cookies.name + '!</h2>');
});

app.get('/name/:name', function(req, res){
    res.cookie('name', req.params.name/*, {maxAge: 9000}*/).send('To check the set cookie <a href="/name">Get set Name .</a>');
});

app.get('/clear', function(req, res){
    res.clearCookie('name').send(req.cookies.name);
})


app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});