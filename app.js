var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/helloExpress');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
var Users = mongoose.model('Users', UserSchema);


//show all users
app.get('/users', function(req, res){
    Users.find({}, function(err, docs){
        if(err){
            res.json(err);
        }else{
            res.render('users/index', {users: docs});
        }
    });
});
//new user
app.get('/users/new', function(req, res){
    res.render('users/new');
});
//post new user
app.post('/users', function(req, res){
    var b = req.body;
    new Users({
        name: b.name,
        email: b.email,
        age: b.age
    }).save(function(err, docs){
        if(err){
            res.json(err);
        }else{
            res.redirect('/users/' + b.name);
        }
    });
});
//create a param middleware
app.param('name', function(req, res, next, name){
    Users.find({name: name}, function(err, docs){
        if(err){
            res.send('User with ' + name + ' username not found.!');
        }else{
            req.user = docs[0];
            next();
        }
    });
});
//show single user
app.get('/users/:name', function(req, res){
    res.render('users/show', {user: req.user});
});
//edit
app.get('/users/:name/edit', function(req, res){
    res.render('users/edit', {user: req.user});
});
//update
app.put('/users/:name', function(req, res){
    var b = req.body;
    Users.update(
        {name: req.params.name},
        {name: b.name, email: b.email, age: b.age},
        function(err){
            res.redirect('/users/' + b.name);
        }
    );
});
//delete
app.delete('/users/:name', function(req, res){
    Users.remove({name: req.params.name}, function(err){
        res.redirect('/users');
    });
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on Port : ' + app.get('port'));
});