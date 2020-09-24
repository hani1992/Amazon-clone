import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDQNlpTdMek6sf859B4hyYblWopV772lgs",
    authDomain: "challnege-48cb5.firebaseapp.com",
    databaseURL: "https://challnege-48cb5.firebaseio.com",
    projectId: "challnege-48cb5",
    storageBucket: "challnege-48cb5.appspot.com",
    messagingSenderId: "131196051111",
    appId: "1:131196051111:web:59de56a5f501245f89c582",
    measurementId: "G-1KXL64J9ZM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };