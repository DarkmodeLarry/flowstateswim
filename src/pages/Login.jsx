import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import eyeIcon from '../assets/visibilityIcon.svg'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

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

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }

  return (
    <>
      <div className='relative flex h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent'>
        <div className='text-4xl montserrat italic font-extrabold tracking-tighter p-4'>
          <h1 className='text-cyan-500'>Flow State Swim</h1>
        </div>

        <form
          onSubmit={onSubmit}
          className='relative mt-24 space-y-8 rounded-md bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 text-gray-100'
        >
          <h1 className='text-4xl text-gray-200 font-semibold'>Sign In</h1>
          <div className='space-y-4'>
            <label className='inline-block w-full'>
              <input
                id='email'
                value={email}
                type='email'
                placeholder='Email'
                className='input border-b-2 border-orange-500'
                onChange={onChange}
              />
            </label>

            <div className='inline-block w-full relative'>
              <input
                value={password}
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                onChange={onChange}
                id='password'
                className='input border-b-2 border-orange-500'
              />
              <img
                src={eyeIcon}
                alt='showPassword'
                onClick={() => setShowPassword((prevState) => !prevState)}
                className='cursor-pointer absolute top-3 right-2 p-1'
              />
            </div>

            <Link to='/forgotpassword' className='forgotpassword'>
              Forgot Password?
            </Link>
            <button className='w-full rounded bg-cyan-600 py-3 font-semibold' type='submit'>
              Sign In
            </button>
          </div>
        </form>

        <div className='text-orange-400'>New to Flow State Swim? </div>
        <Link to='/signup' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>
    </>
  )
}

export default Login
