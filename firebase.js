'use strict';
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://highscore-41576-default-rtdb.europe-west1.firebasedatabase.app"
});

const firestore = admin.firestore()
const fireauth = admin.auth();


module.exports = {
  firestore,
  fireauth
};