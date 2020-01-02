import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDmh2qpYK0cjClgG8sIwyXbsVaK9Lmjz38',
  authDomain: 'react-firebase-auth-98ddd.firebaseapp.com',
  databaseURL: 'https://react-firebase-auth-98ddd.firebaseio.com',
  projectId: 'react-firebase-auth-98ddd',
  storageBucket: 'react-firebase-auth-98ddd.appspot.com',
  messagingSenderId: '222399383378',
  appId: '1:222399383378:web:b3ce86ee482a91119c5c8b',
  measurementId: 'G-BY2M0BX09H'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
