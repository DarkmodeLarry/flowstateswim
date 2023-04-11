import { useNavigate, useLocation } from 'react-router-dom'
import { AiTwotoneHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { GrBarChart } from 'react-icons/gr'
import React from 'react'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }
  return (
    <footer className='fixed bottom-0 h-24 bg-orange-400 flex justify-center items-center w-full'>
      <nav className=' w-full'>
        <ul className='flex justify-evenly w-full'>
          <li className='cursor-pointer' onClick={() => navigate('/')}>
            <AiTwotoneHome className='text-3xl text-black' />
          </li>
          <li className='cursor-pointer'>
            <GrBarChart className='text-3xl' onClick={() => navigate('/stats')} />
          </li>
          <li className='cursor-pointer'>
            <FiUser className='text-3xl text-black' onClick={() => navigate('/profile')} />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
