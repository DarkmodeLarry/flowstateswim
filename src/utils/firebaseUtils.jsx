import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
  getFirestore
} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

// initialize firebase services
const db = getFirestore()
const auth = getAuth()

// collections ref
const colRef = collection(db, 'menu')

// queries
const q = query(colRef, where('name', '==', 'membership'), orderBy('fee'))

// realtime collection data
onSnapshot(q, (snapshot) => {
  let menu = []
  snapshot.docs.forEach((doc) => {
    menu.push({ ...doc.data(), id: doc.id })
  })
  console.log(menu)
})

// adding docs
const addMenuForm = document.querySelector('.add')
addMenuForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    name: addMenuForm.name.value,
    fee: addMenuForm.fee.value,
    feeType: addMenuForm.feeType.value,
    level: addMenuForm.level.value,
    createdAt: serverTimestamp(),
    description: addMenuForm.description.value,
    image: addMenuForm.image.value,
    schedule: addMenuForm.schedule.value,
    time: addMenuForm.time.value
  }).then(() => {
    addMenuForm.reset()
  })
})

// deleting docs
const deleteMenuForm = document.querySelector('.delete')
deleteMenuForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'menu', deleteMenuForm.id.value)

  deleteDoc(docRef).then(() => {
    deleteMenuForm.reset()
  })
})

// fetching a single document (& realtime)
const docRef = doc(db, 'menu', 'GHZGrJ2D2NVHwquddgd4')

onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id)
})

// updating a document
const updateMenuForm = document.querySelector('.update')
updateMenuForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let docRef = doc(db, 'menu', updateMenuForm.id.value)

  updateDoc(docRef, {
    name: updateMenuForm.name.value,
    fee: updateMenuForm.fee.value,
    feeType: updateMenuForm.feeType.value,
    level: updateMenuForm.level.value,
    description: updateMenuForm.description.value,
    image: updateMenuForm.image.value,
    schedule: updateMenuForm.schedule.value,
    time: updateMenuForm.time.value
  }).then(() => {
    updateMenuForm.reset()
  })
})

// signing users up
const signUpForm = document.querySelector('.signup')
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signUpForm.email.value
  const password = signUpForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('user created:', userCredential.user)
      signUpForm.reset()
    })
    .catch((error) => {
      console.log('error:', error.message)
    })
})

// logging in and out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch((error) => {
      console.log('error:', error.message)
    })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('user logged in:', userCredential.user)
      loginForm.reset()
    })
    .catch((error) => {
      console.log('error:', error.message)
    })
})

// subscribing to auth changes
onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})

// unsubscribing from changes (auth & db)
const unsubButton = document.querySelector('.unsub')
unsubButton.addEventListener('click', () => {
  console.log('unsubscribing')
  unsubCol()
  unsubDoc()
  unsubAuth()
})
