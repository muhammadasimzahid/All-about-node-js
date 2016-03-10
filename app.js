var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('home.jade', { title: "Having fun with Express." });
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});