import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAFtue9OAdxlnZtzZUYax5kJaYo6lW49pM",
    authDomain: "learning-e3247.firebaseapp.com",
    databaseURL: "https://learning-e3247-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "learning-e3247",
    storageBucket: "learning-e3247.appspot.com",
    messagingSenderId: "498462730990",
    appId: "1:498462730990:web:b71ddcecad66b260e9a1ff",
    measurementId: "G-Z2DN7V3W56"
  };

  const app = firebase.initializeApp(firebaseConfig)

  const database = app.firestore();

  export {database}
