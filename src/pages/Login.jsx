import { Button, Form, Input } from 'antd'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import eyeIcon from '../assets/icons/visibilityIcon.svg'
import { useDispatch } from 'react-redux'
import { ShowLoader } from '../redux/loaderSlice'
import { LoginUser } from '../utils/loginUser'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)

  const onFinished = async (values) => {
    try {
      dispatch(ShowLoader(true))
      const response = await LoginUser(values)
      dispatch(ShowLoader(false))
      if (response.success) {
        toast.success(response.message)
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...response.data,
            password: ''
          })
        )
        navigate('/')
      } else {
        toast.error(response.message, {
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    } catch (error) {
      dispatch(ShowLoader(false))
      toast.error('Login error, Please try again.', {
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) navigate('/')
  }, [])

  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center md:bg-transparent'>
      <div className='text-4xl montserrat italic font-extrabold tracking-tighter p-4'>
        <h1 className='text-cyan-500'>Welcome Back!</h1>
      </div>

      <Form
        layout='vertical'
        onFinish={onFinished}
        className='relative rounded-md bg-black/75 py-10 px-6  w-[360px] md:w-[500px] md:px-14 text-gray-100'
      >
        <h1 className='text-4xl text-gray-200 font-semibold'>Sign In</h1>

        <Form.Item name='email' label='Email'>
          <Input type='email' className='input border-b-2 border-orange-500' placeholder='Email' />
        </Form.Item>
        <div className='inline-block w-full relative'>
          <Form.Item name='password' label='Password'>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='input border-b-2 border-orange-500'
            />
          </Form.Item>
          <img
            src={eyeIcon}
            alt='showPassword'
            onClick={() => setShowPassword((prevState) => !prevState)}
            className='cursor-pointer absolute top-10 right-2 p-1'
          />
        </div>

        <Link to='/forgotpassword' className='forgotpassword'>
          Forgot Password?
        </Link>
        <Button
          className='w-full contained-btn rounded bg-cyan-800 py-5 my-4 flex items-center justify-center text-gray-200 tracking-wide font-semibold'
          htmlType='submit'
        >
          Sign In
        </Button>
      </Form>
      <div className='w-full flex flex-col justify-center text-center'>
        <h3 className='text-orange-400'>New to Flow State Swim? </h3>
        <Link to='/signup' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>
    </div>
  )
}

export default Login
