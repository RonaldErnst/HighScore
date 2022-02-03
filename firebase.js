'use strict';
const firebase = require('firebase-admin');
const config = require('./config');

const firebaseConfig = {
    apiKey: "AIzaSyD2tM-LtE23sEyNohe2KTk_f0GkCKlvoo4",
    authDomain: "highscore-41576.firebaseapp.com",
    projectId: "highscore-41576",
    storageBucket: "highscore-41576.appspot.com",
    messagingSenderId: "634597664218",
    appId: "1:634597664218:web:819c7313d790e99a91cce3",
    measurementId: "G-RZRC5PLTHC"
  };

firebase.initializeApp(config.firebaseConfig);
const firestore = firebase.firestore();
const fireauth = firebase.auth();
module.exports = {
  firestore,
  fireauth
};