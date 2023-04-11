// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1GwENgieSsZW9aQwwBITam8zC1E--pRQ',
  authDomain: 'flowstateswim-eb240.firebaseapp.com',
  projectId: 'flowstateswim-eb240',
  storageBucket: 'flowstateswim-eb240.appspot.com',
  messagingSenderId: '302659226644',
  appId: '1:302659226644:web:a698e70f5ffed167236b01'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
