var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkingTime');

var checkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 9
    },
    email: {
        type: String,
        match: /[a-z0-9]+@[a-z]+\.[a-z]/,
        required: true
    },
    age: {
        type: Number,
        min: 10,
        max: 20,
    },
    living: {
        type: String,
        enum: ['alive', 'dead'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

var check = mongoose.model('bakriiiiis', checkSchema);


app.get('/', function(req, res){
    new check({
        name: 'Asim',
        email: 'asim@gmail.com',
        age: 19,
        living: 'alive'
    }).save(function(err, docs){
        if(err){
            res.json(err);
        }else{
            res.json(docs);
        }
    });
});



app.listen(3000, function(){
    console.log('Server is listening on PORT : 3000');
});