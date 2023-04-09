import { useState } from 'react'
import { useLogin } from './hooks/useLogin'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }
  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <div className='text-4xl montserrat italic font-extrabold tracking-tighter p-4'>
        <h1 className='text-cyan-500'>Flow State Swim</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='relative mt-24 space-y-8 rounded-md bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 text-gray-100'
      >
        <h1 className='text-4xl text-gray-200 font-semibold'>Sign In</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input
              required
              value={email}
              type='email'
              placeholder='Email'
              className='input border-b-2 border-orange-500'
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <p className='p-1 text-[13px] font-light  text-orange-500'>
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className='inline-block w-full'>
            <input
              required
              value={password}
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              className='input border-b-2 border-orange-500'
            />
            {error && (
              <p className='p-1 text-[13px] font-light  text-orange-500'>
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button className='w-full rounded bg-cyan-600 py-3 font-semibold' type='submit'>
          Sign In
        </button>
        {error && <p>{error}</p>}
        <div className='text-[gray]'>New to Flow State Swim? </div>
      </form>
    </div>
  )
}

export default Login
