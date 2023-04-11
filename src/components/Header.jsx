import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='w-full h-20 '>
      <h1 className='montserrat font-extrabold italic text-2xl tracking-tighter text-cyan-400 text-center my-5'>
        Flow State Swim
      </h1>
      <ul className='flex justify-evenly w-full'>
        <li>
          <NavLink to='/' activeclassname='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' activeclassname='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' activeclassname='active'>
            Signup
          </NavLink>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
