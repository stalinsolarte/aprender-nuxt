import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'

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
const storage = firebase.storage().ref()
const auth = firebase.auth()

export default firebase
export {
  db,
  storage,
  auth
}