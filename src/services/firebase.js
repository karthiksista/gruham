import "firebase/auth";

import firebase from "firebase/app";

export const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
    console.log('herrrrrrrrrrrrrr')
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)

    }).catch((error) => {
        console.log(error.message)
    })
}
export const logOut = () => {
    auth.signOut().then(() => {
        console.log('logged out')
        localStorage.removeItem('displayName')
        localStorage.removeItem('email')

    }).catch((error) => {
        console.log(error.message)
    })
}

// auth.onAuthStateChanged((user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         var uid = user.uid;
//         console.log('VAMMO', user)
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });
// export const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true })

