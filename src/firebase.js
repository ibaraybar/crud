import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFGBybc3b9Mkgz_hHoRA7gjUQSKh1rlSc",
    authDomain: "crud-cbb95.firebaseapp.com",
    projectId: "crud-cbb95",
    storageBucket: "crud-cbb95.appspot.com",
    messagingSenderId: "143561121174",
    appId: "1:143561121174:web:253bfa359cf1616e2791b7"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
