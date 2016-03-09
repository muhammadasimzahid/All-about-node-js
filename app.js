var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Hello, Express!');
});

app.get('/hi', function(req, res){
    var message = [
        "<h1>Hello, Express!</h1>",
        "<p>Welcome to Building Web Apps in Node.js with Express.</p>",
        "<p>You will love Express becaues it's : </p>",
        "<ul>",
        "<li>Fast</li>",
        "<li>Fun</li>",
        "<li>Flexible</li>",
        "</ul>"
    ].join('\n');
    res.send(message);
});

app.get('/users/:id', function(req, res){
    res.send('<h1>Hello, User # ' + req.params.id + '!</h1>');
});

app.post('/users', function(req, res){
    console.log(req.body);
    res.send('Creating a new user with username : ' + req.body.username);
});

app.get(/\/bakri\/(\d*)\/(edit)\/(asim)/, function(req, res){
    console.log(req.params);
    res.send('Hello, bakri');
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});