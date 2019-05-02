import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAb4UpvlzjjpY-RcDgkiBNsT5UOmu3eSQM",
  authDomain: "bdnuxt.firebaseapp.com",
  databaseURL: "https://bdnuxt.firebaseio.com",
  projectId: "bdnuxt",
  storageBucket: "bdnuxt.appspot.com",
  messagingSenderId: "237661707439"
};
//firebase.initializeApp(config);


if(!firebase.apps.length){
  firebase.initializeApp(config);
}
const db = firebase.firestore()
export default firebase
export {
  db
}