import { Button, Form, Input } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import eyeIcon from '../assets/visibilityIcon.svg'
import { useDispatch } from 'react-redux'
import { CreateUser } from '../utils/createUser'
import { ShowLoader } from '../redux/loaderSlice'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoader(true))
      const response = await CreateUser({
        ...values,
        role: 'user'
      })
      dispatch(ShowLoader(false))
      if (response.success) {
        toast.success(response.message)
        navigate('/login')
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      dispatch(ShowLoader(false))
      toast.error('Registration error. Please try again.')
    }
  }

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   if (user) {
  //     navigate('/')
  //   }
  // }, [])

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: ''
  // })
  // const { name, email, password } = formData

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value
  //   }))
  // }

  // const onSubmit = async (e) => {
  //   e.preventDefault()

  //   try {
  //     const auth = getAuth()

  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password)

  //     const user = userCredential.user

  //     updateProfile(auth.currentUser, {
  //       displayName: name
  //     })

  //     const formDataCopy = { ...formData }
  //     delete formDataCopy.password
  //     formDataCopy.timestamp = serverTimestamp()

  //     await setDoc(doc(db, 'users', user.uid), formDataCopy)

  //     navigate('/')
  //   } catch (error) {
  //     toast.error('Registration error. Please try again.')
  //   }
  // }

  return (
    <div className='relative flex h-screen w-screen flex-col bg-black max-w-sm min-w-full md:items-center md:justify-center md:bg-transparent'>
      <div className='text-4xl montserrat italic font-extrabold tracking-tighter p-4'>
        <h1 className='text-cyan-500'>Flow State Swim</h1>
      </div>
      <Form
        layout='vertical'
        onFinish={onFinish}
        className='relative rounded-md bg-black/75 py-10 px-6 md:mt-0 w-[360px] md:w-[500px] md:px-14 text-gray-100'
      >
        <h1 className='text-4xl text-gray-200 font-semibold'>Sign Up</h1>

        <div className='flex w-full gap-2'>
          <Form.Item label='First Name' name='firstName'>
            <Input className=' input border-b-2 border-orange-500' placeholder='First Name' />
          </Form.Item>

          <Form.Item label='Last Name' name='lastName'>
            <Input className='input border-b-2 border-orange-500' placeholder='Last Name' />
          </Form.Item>
        </div>

        <Form.Item label='Email' name='email'>
          <Input className='input border-b-2 border-orange-500' placeholder='Email' />
        </Form.Item>

        <div className='inline-block w-full relative'>
          <Form.Item name='password' label='password'>
            <Input
              type={showPassword ? 'text' : 'password'}
              className='input w-full border-b-2 border-orange-500'
              placeholder='Password'
            />
          </Form.Item>
          <img
            src={eyeIcon}
            alt='show password'
            className='cursor-pointer absolute top-10 right-2 p-1'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>

        <Link to='/forgotpassword' className='text-cyan-500'>
          Forgot Password?
        </Link>

        <Button
          className='primary-button flex items-center justify-center text-gray-200 my-2 full-width-button w-full rounded bg-cyan-800 py-5 font-semibold'
          htmlType='submit'
        >
          Sign Up
        </Button>
      </Form>

      <div className='text-[gray] px-6'>
        <p className=''>New to Flow State Swim?</p>
        <Link to='/login' className='text-cyan-500'>
          Sign In Instead
        </Link>
      </div>
    </div>
  )
}

export default Signup
