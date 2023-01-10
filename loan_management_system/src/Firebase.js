import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAhCBvFHFF841R8BU88gUgWDPxv-p7rp4s",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
//export const db=firebase.firestore()
export const db=app.firestore()

// update firestore setting
db.settings({timestampsInSnapshots: true})
export default app