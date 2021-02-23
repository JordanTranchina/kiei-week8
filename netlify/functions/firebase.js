const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyB2ghQCvl9Bps-uv_7ToQTiwqzcYwiSsr0",
  authDomain: "kiei-451-4d1c2.firebaseapp.com",
  projectId: "kiei-451-4d1c2",
  storageBucket: "kiei-451-4d1c2.appspot.com",
  messagingSenderId: "1064307467074",
  appId: "1:1064307467074:web:6c06ec43c91db957e81edb"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase