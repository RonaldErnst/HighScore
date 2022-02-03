'use strict';
const firebase = require('firebase-admin');
const config = require('./config');

const fb = firebase.initializeApp(config.firebaseConfig);

module.exports = fb;