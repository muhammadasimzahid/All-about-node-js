var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    //res.send(404, 'Hello, Express and I am new to express.');
    //res.render('layout');
    //res.json({name: "Muhammad Asim Zahid"});
    //res.type('image/png').send('this is a picture.');
    //res.format({
    //    html: function () { res.send('<h1>Hello, Express!</h1>'); },
    //    json: function () { res.json({message: 'Hello, Express!'}); },
    //    text: function () { res.send('Hello, Express!'); }
    //});
    res.send('Hello, Express!');
});

//app.get('/user', function(req, res){
//    res.redirect('/');
//});

app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});