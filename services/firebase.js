import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAb4UpvlzjjpY-RcDgkiBNsT5UOmu3eSQM",
    authDomain: "bdnuxt.firebaseapp.com",
    databaseURL: "https://bdnuxt.firebaseio.com",
    projectId: "bdnuxt",
    storageBucket: "bdnuxt.appspot.com",
    messagingSenderId: "237661707439"
  };
  firebase.initializeApp(config);

  export default firebase