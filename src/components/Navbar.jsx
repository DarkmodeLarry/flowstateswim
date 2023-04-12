import { useNavigate, useLocation } from 'react-router-dom'
import { AiTwotoneHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { CiGrid41 } from 'react-icons/ci'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }
  return (
    <footer className='footer fixed bottom-0 h-16 bg-[var(--black)] flex justify-center items-center w-full'>
      <nav className=' w-full'>
        <ul className='flex justify-evenly w-full'>
          <li
            className='cursor-pointer flex flex-col items-center justify-center'
            onClick={() => navigate('/')}
          >
            <AiTwotoneHome className='text-2xl text-gray-200' />
            <p className=''>Home</p>
          </li>
          <li className='cursor-pointer flex flex-col items-center justify-center '>
            <CiGrid41 className='text-2xl text-gray-200' onClick={() => navigate('/team')} />
            <p className=''>Team</p>
          </li>
          <li className='cursor-pointer flex flex-col items-center justify-center'>
            <FiUser className='text-2xl text-gray-200' onClick={() => navigate('/profile')} />
            <p className=''>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
