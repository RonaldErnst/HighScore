'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const { routes } = require('./routes/test-api');

const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));

app.use('/api', routes);


app.get('/login',/* checkNotAuthenticated, */(req, res) => {
  res.render('login.ejs');
})

app.get('/signup',/* checkNotAuthenticated, */(req, res) => {
  res.render('signup.ejs');
})

app.get('/reset',/* checkNotAuthenticated, */(req, res) => {
  res.render('reset-password.ejs');
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

function createUser(vname, nname, mail, pass) {
  app.post("/create",async(req,res)=>{
    const data = req.body;
    await User.add({
      "vname":vname,
      "nname":nname,
      "mail":mail,
      "pass":pass
    });
    res.send({msg: "User Added"});
  });
}

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));