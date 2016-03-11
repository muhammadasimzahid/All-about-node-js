var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(session({ 
    secret: 'this is secret used for security purpose',
    resave: true,
    saveUninitialized: true
}));

app.get('/name', function(req, res){
    res.send(req.session.name);// through session
});

app.get('/name/:name', function(req, res){
    req.session.name = req.params.name; //set through session
    res.send('Set');
});

app.get('/clear', function(req, res){
    req.session.destroy();
    res.send('Destroyed');
})


app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});