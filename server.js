'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const testApi = require('./routes/test-api');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api', testApi);

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));