const express = require('express');
var app = express();
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const path = require('path');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true });
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

var Movies = require('./models/movies');

// var fs = require('fs');
// var p = './public/data/netflix.json';
// var data = JSON.parse(fs.readFileSync(p));
// for(var i=0;i<data.length;i++){
//     var _movie = new Movies({
//         "title": data[i].Title,
//         "poster": data[i].Image_url,
//         "video": data[i].Link,
//         "rating": data[i].rating,
//         "provider":"netflix"
//     });
//     _movie.save((err) => {
//         console.log(`saved ${i}`);
      

//     });
// }
// var p = './public/data/prime.json';
//  var data = JSON.parse(fs.readFileSync(p));
// for(var i=0;i<data.length;i++){
//     var _movie = new Movies({
//         "title": data[i].Title,
//         "poster": "",
//         "video": "",
//         "rating": data[i].rating,
//         "provider":"amazon prime"
//     });
//     _movie.save((err) => {
//         console.log(`saved ${i}`);
//     }
// }
      

//     });
// }
//  var p = './public/data/prime.json';
//  var data = JSON.parse(fs.readFileSync(p));
// for(var i=0;i<data.length;i++){
//     var _movie = new Movies({
//         "title": data[i].Title,
//         "poster": "",
//         "video": "",
//         "rating": data[i].rating,
//         "provider":"amazon prime"
//     });
//     _movie.save((err) => {
//         console.log(`saved ${i}`);
      

//     });
// }



//console.log(data);

app.get('/api/netflix', (req, res, next) => {
    var q = Movies.find({provider:"netflix"}).limit(8);
    q.exec(function (err, movies) {
        if (err) {
            console.log("database error");
            return;
        }
        res.send(movies)

    });

});
app.get('/api/prime', (req, res, next) => {
    var q = Movies.find({provider:"amazon prime"}).limit(8);
    q.exec(function (err, movies) {
        if (err) {
            console.log("database error");
            return;
        }
        res.send(movies)

    });

});
app.get('/api/hotstar', (req, res, next) => {
    var q = Movies.find({provider:"hotstar"}).limit(8);
    q.exec(function (err, movies) {
        if (err) {
            console.log("database error");
            return;
        }
        res.send(movies)

    });

});

app.get('/api/search/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    Movies.findOne({ title: new RegExp('^' + id + '$', "i") }, function (err, movies) {
        res.send(movies);
        console.log(movies);
    });
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get('/movie', function (req, res) {
    res.send("haha");
});

app.listen(port);
