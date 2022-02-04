'use strict';
const firebase = require('firebase-admin');
const config = require('./config');

firebase.initializeApp(config.firebaseConfig);
const firestore = firebase.firestore();
const fireauth = firebase.auth();
module.exports = {
  firestore,
  fireauth
};