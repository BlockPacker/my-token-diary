import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';

if(!firebase.apps.length) {  
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

db.collection('vote').where('done', '==', 'false')
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc){
          console.log(doc.data());
      });
  })
  .catch(function(error){
      console.log('ERROR');
  });

class Admin extends Component {
    render() {
        return (
          <span>TEST</span>
        )
    }
}

export default Admin;