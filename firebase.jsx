// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBeQpQcklXccmQOuyGavMxPQWmBfexMpi0',
  authDomain: 'flowstateswim-ebbe9.firebaseapp.com',
  projectId: 'flowstateswim-ebbe9',
  storageBucket: 'flowstateswim-ebbe9.appspot.com',
  messagingSenderId: '808691146586',
  appId: '1:808691146586:web:e77bb53c6c080a46a4dd63',
  measurementId: 'G-KLJB1T0WSB'
}

// Initialize Firebase
initializeApp(firebaseConfig)

// Init firestore
const db = getFirestore()

// Iniitalize Auth
const auth = getAuth()

export { db, auth }
