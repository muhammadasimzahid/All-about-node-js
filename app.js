var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
//app.use(express.static(__dirname + '/public'));

var count = 0;

app.get('/hello.txt', function(req, res, next){
    count++;
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/total', function(req, res){
    res.send('Total times its watched is : : ' + count);
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});