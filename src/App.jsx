import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/Forgotpassword'
import Profile from './pages/Profile'
import LandingPage from './pages/LandingPage'
import Menu from './pages/Menu'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route path='/forgotpassword' element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route path='Menu' element={<Menu />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
        <Navbar />
      </BrowserRouter>

      <ToastContainer />
    </>
  )
}

export default App
