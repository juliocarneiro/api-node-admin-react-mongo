/**
 *
 * Arquivo: src/api.js
 * Description: Arquivo responsável por iniciar e carregar os middlewares.
 *
 */

import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import database from "./config/database";

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req,res) => {
  res.render('home')
});
app.get('/admin', (req,res) => {
  res.render('admin')
});
app.get('/login', (req,res) => {
  res.render('login')
});

const configureExpress = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/json" }));
  
  app.use("/api", routes);

  return app;
};

export default () => database.connect().then(configureExpress);
