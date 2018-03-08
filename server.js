'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),
    restful = require('node-restful'),
    jwt = require('jsonwebtoken'),
    mongoose = restful.mongoose;
var app = express();

app.use(express.static("./client/build"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

//mLAB
mongoose.connect("mongodb://admin:admin@ds247698.mlab.com:47698/brride");

var users = {teste:'teste'};
var JWT_PASSWORD = 'dracaris';
var port = process.env.PORT || 3030;

//ENDPOINTS
var Posts = app.posts = restful.model('posts', mongoose.Schema({
  titulo: String,
  subtitulo: String,
  mensagem: String,
}))
.methods(['get', 'post', 'put', 'delete']);
Posts.register(app, '/api/posts');

//URLS
app.post('/login', bodyParser.json(),(req,res) => {
  if(!users[req.body.username] || users[req.body.username] !== req.body.password){
    res.status(401).json({ error:'Usuario ou senha inválidos' })
  } else {
    var token = jwt.sign({
      username: req.body.username
    }, JWT_PASSWORD, {
      expiresIn:'60 seconds'
    })

    res.json({token})
  }
})

// app.post('/api/posts', (req,res) => {
//   var auth = req.headers.authorization;

//   if(!auth || !auth.startsWith('Bearer')){
//     res.status(401).json({error:'Sessão inválida'});
//   } else{
//     auth = auth.split('Bearer').pop().trim();
//     res.status(200).json({success:'Sessão autenticada'});
//   }

//   jwt.verify(auth, JWT_PASSWORD, (err, data) => {
//     if(err){
//       res.status(401).json({error:'Sessão inválida'})
//     }else {
//       res.status(200).json({success:'Sessão autenticada'});
//     }
//   });
// });

//LISTEN SERVER
app.listen(port, () => {
    console.log('Aplicação rodando em http://localhost:'+port);
});