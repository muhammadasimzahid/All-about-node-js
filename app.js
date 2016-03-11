var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    //res.send(req.get('user-agent')); //show the user agent header
    //res.send(req.header('user-agent')); // show the user agent header
    //res.send(req.accepted); this is not working in express 4 now use the following: but is used to show which types are accepted
    //res.send(req.accepts(['html', 'text', 'json'])); // check which one is accepted
    //res.send(req.acceptedCharsets); //this is also not working // used to check which charset are supported
    //res.send(req.acceptsCharsets('utf-8') ? 'yes' : 'no'); // work this way by check by ternary operator yes or no
    //res.send(req.acceptedLanguages); also not working use following // show which languages are accepted.
    //res.send(req.acceptsLanguages('en') ? 'yes' : 'no'); //is english is accepted
    //res.send(req.acceptsLanguages('urdu') ? 'yes' : 'no'); // is urdu accepted
    //res.send(req.acceptsLanguages('en-US') ? 'yes' : 'no'); // is eng of US accept
    //res.send(req.acceptsLanguages('fr') ? 'yes' : 'no'); // is french is accepted
});

app.get('/name/:name', function(req, res){
    res.send(req.params.name);
});

app.get('/nam/:nam?', function(req, res){
    res.send(req.param('nam', 'Default Value'));
});


app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});