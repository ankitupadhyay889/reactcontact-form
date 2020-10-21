import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
// Your Credentials
});

var db = firebaseApp.firestore();

export { db };