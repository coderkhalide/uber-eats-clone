import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC2lDR4Z65Xko-dd7QdM6TKiyXQ63QbvW4",
    authDomain: "uber-eats-clone-ks.firebaseapp.com",
    projectId: "uber-eats-clone-ks",
    storageBucket: "uber-eats-clone-ks.appspot.com",
    messagingSenderId: "281176967578",
    appId: "1:281176967578:web:2571a2dcc6b781597bd223"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = app.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, timestamp }