import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/Forgotpassword'
import Profile from './pages/Profile'
import LandingPage from './pages/LandingPage'
import { useSelector } from 'react-redux'
import Spinner from './components/Spinner'

function App() {
  const { loading } = useSelector((state) => state.loader)

  return (
    <div>
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path='/forgotpassword' element={<ForgotPassword />} />

          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Navbar />
      </BrowserRouter>

      <ToastContainer />
    </div>
  )
}

export default App
