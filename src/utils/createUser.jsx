import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import db from '../firebase.config'
import CryptoJS from 'crypto-js'

export const CreateUser = async (payload) => {
  try {
    // check if user already exists by email
    const qry = query(collection(db, 'users'), where('email', '==', payload.email))
    const querySnapshot = await getDocs(qry)
    if (querySnapshot.size > 0) {
      throw new Error('user already exists')
    }

    // hashpassword
    const hashedPassword = CryptoJS.AES.encrypt(payload.password, 'flowstateswim-eb240').toString()
    payload.password = hashedPassword
    const auth = getAuth()

    const { user } = await createUserWithEmailAndPassword(auth, payload.email, payload.password)

    // Add user to Firestore with uid
    const docRef = collection(db, 'users')
    await addDoc(docRef, {
      ...payload,
      uid: user.uid,
      createdAt: new Date()
    })

    return {
      success: true,
      message: 'user created successfully'
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}
