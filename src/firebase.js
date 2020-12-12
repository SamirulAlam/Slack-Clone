import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAWouBsOXIggKVPrybLwgXiuKMh9-7acSY",
    authDomain: "slack-clone-a4d27.firebaseapp.com",
    projectId: "slack-clone-a4d27",
    storageBucket: "slack-clone-a4d27.appspot.com",
    messagingSenderId: "1058111412600",
    appId: "1:1058111412600:web:417771835b910cf435908d",
    measurementId: "G-EMTJJEZ06P"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};

  export  default db;