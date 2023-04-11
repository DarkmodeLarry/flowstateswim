import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import db from '../firebase.config'

import eyeIcon from '../assets/visibilityIcon.svg'

function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      toast.error('Registration error. Please try again.')
    }
  }

  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <div className='text-4xl montserrat italic font-extrabold tracking-tighter p-4'>
        <h1 className='text-cyan-500'>Flow State Swim</h1>
      </div>
      <form
        onSubmit={onSubmit}
        className='relative mt-24 space-y-8 rounded-md bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 text-gray-100'
      >
        <h1 className='text-4xl text-gray-200 font-semibold'>Sign Up</h1>
        <div className='space-y-4'>
          <input
            type='text'
            className='input border-b-2 border-orange-500'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChange}
          />

          <label className='inline-block w-full'>
            <input
              value={email}
              id='email'
              type='email'
              placeholder='Email'
              className='input border-b-2 border-orange-500'
              onChange={onChange}
            />
          </label>

          <div className='inline-block w-full relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              onChange={onChange}
              value={password}
              id='password'
              className='input border-b-2 border-orange-500'
            />

            <img
              src={eyeIcon}
              alt='show password'
              className='cursor-pointer absolute top-3 right-2 p-1'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to='/forgotpassword' className='text-cyan-500'>
            Forgot Password?
          </Link>
          <div className='signupbar'>
            <button className='w-full rounded bg-cyan-600 py-3 font-semibold'>Sign Up</button>
          </div>
        </div>
      </form>

      <div className='text-[gray]'>
        <p className=''>New to Flow State Swim?</p>
        <Link to='/login' className='text-cyan-500'>
          Sign In Instead
        </Link>
      </div>
    </div>
  )
}

export default Signup
