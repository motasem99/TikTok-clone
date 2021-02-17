import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyArqgjI4oSr4S_OE7zO8znC5wA1i-P22UQ',
  authDomain: 'tiktok-clone-a0463.firebaseapp.com',
  projectId: 'tiktok-clone-a0463',
  storageBucket: 'tiktok-clone-a0463.appspot.com',
  messagingSenderId: '279839154716',
  appId: '1:279839154716:web:7bba09932b01452536b5d9',
  measurementId: 'G-QD9V3DW7TY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
