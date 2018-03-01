'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;
var app = express();

//VIEWS
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

//mLAB
mongoose.connect("mongodb://admin:admin@ds247698.mlab.com:47698/brride");

//ENDPOINTS
var Posts = app.posts = restful.model('posts', mongoose.Schema({
  titulo: String,
  subtitulo: String,
  mensagem: String,
}))
.methods(['get', 'post', 'put', 'delete']);
Posts.register(app, '/api/posts');

var User = app.user = restful.model('user', mongoose.Schema({
  titulo: String,
  subtitulo: String,
  mensagem: String,
}))
.methods(['get', 'post', 'put', 'delete']);
User.register(app, '/api/user');

//URLS
app.get('/', (req,res) => {
  res.render('home')
});
app.get('/admin', (req,res) => {
  res.render('admin')
});

//LISTEN SERVER
app.listen(3000, function(){
    console.log('Aplicação rodando em http://localhost:3000');
});