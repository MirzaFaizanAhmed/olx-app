import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBQOGhsYQvB9l0YkvapfeEvJ7cFiS4Y5Eo",
    authDomain: "olxapp-3000.firebaseapp.com",
    databaseURL: "https://olxapp-3000.firebaseio.com",
    projectId: "olxapp-3000",
    storageBucket: "olxapp-3000.appspot.com",
    messagingSenderId: "332305524058",
    appId: "1:332305524058:web:ff3c8bf3c8c6f93fd23f63",
    measurementId: "G-VWWBRHVE2S"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase