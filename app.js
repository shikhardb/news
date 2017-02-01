var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// mongoose settings and schema

// SET MONGOLAB_URI="mongodb://shikhar:abcd123@ds139979.mlab.com:39979/novosti"

var newsSchema = new mongoose.Schema({
  title: String,
  author: String,
  tags: String,
  time: Date,
  image: String,
  description: String,
  deviceId: String
});

var News = mongoose.model('News', newsSchema);

var uri = "mongodb://shikhar:abcd123@ds139979.mlab.com:39979/novosti";

mongoose.connect(uri, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
  res.render('index', { title: 'News App Admin Panel' });
});

app.get('/api/news', function(req, res, next) {
  var query = News.find().sort({time: -1});
  query.limit(50);
  query.exec(function(err, news) {
    if (err) return next(err);
    res.send(news);
  });
});

app.get('/clear', function(req, res, next) {
    News.remove({}, function(err, res) {
        if(err) console.log('Error');
        else    console.log('Success');
    });
});

app.get('/api/news/:id', function(req, res, next) {
    if(req.params.id) {
      News.findById(req.params.id, function(err, result) {
        if (err) return next(err);
        res.send(result);
      });
    }
});
app.get('/api/newsbytags/:tags', function(req, res, next) {
    if(req.params.tags) {
        var query = News.find({tags : req.params.tags}).sort({time: -1});
        query.limit(50);
        query.exec(function(err, news) {
            if (err) return next(err);
            res.send(news);
        });
    }
});

app.post('/', function(req, res){
    var saveNews = new News({
                      title: req.body.title,
                      image: req.body.image,
                      description: req.body.description,
                      time: new Date(),
                      author: 'admin',
                      tags: req.body.tags,
                      deviceId: ''
                  });
    saveNews.save(function(err, doc){
        if(err) res.status(500).status('ERROR !! - ', err);
        else    res.status(200).send(doc);
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
