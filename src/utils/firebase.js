
import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAqF_ts74PnuemldvOJVoYaGb0oelIKmxM',
    authDomain: "mytokendiray.firebaseapp.com",
    databaseURL: "https://mytokendiray.firebaseio.com",
    projectId: "mytokendiray",
    storageBucket: "mytokendiray.appspot.com",
    messagingSenderId: "403467372211"
  });
}
const db = firebase.firestore();
export default db;
