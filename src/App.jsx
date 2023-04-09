import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Navbar from './components/Navbar'
import Home from './Home'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />

            {/* If user is not logged in, redirect to login page */}
            <Route path='/' element={!user ? <Login /> : <Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
