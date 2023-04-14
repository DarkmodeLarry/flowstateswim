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
import { useSelector } from 'react-redux'
import Spinner from './components/Spinner'
import Team from './pages/Team'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import Payments from './pages/Payments'
import Customers from './pages/Customers'
import Subscriptions from './pages/Subscriptions'
import AccountNav from './components/AccountNav'

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
            path='/account'
            element={
              <ProtectedRoute>
                <AccountNav>
                  <Account />
                </AccountNav>
              </ProtectedRoute>
            }
          />

          <Route
            path='/checkout'
            element={
              <ProtectedRoute>
                <AccountNav>
                  <Checkout />
                </AccountNav>
              </ProtectedRoute>
            }
          />
          <Route
            path='/subscriptions'
            element={
              <ProtectedRoute>
                <AccountNav>
                  <Subscriptions />
                </AccountNav>
              </ProtectedRoute>
            }
          />
          <Route
            path='/payments'
            element={
              <ProtectedRoute>
                <AccountNav>
                  <Payments />
                </AccountNav>
              </ProtectedRoute>
            }
          />

          <Route
            path='/customers'
            element={
              <ProtectedRoute>
                <AccountNav>
                  <Customers />
                </AccountNav>
              </ProtectedRoute>
            }
          />

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

          <Route
            path='/team'
            element={
              <ProtectedRoute>
                <Team />
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
