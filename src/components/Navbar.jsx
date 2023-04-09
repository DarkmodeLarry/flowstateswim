import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const { logout } = useLogout()

  return (
    <nav className='w-full h-20 '>
      <h1 className='montserrat font-extrabold italic text-2xl tracking-tighter text-cyan-400 text-center'>
        Flow State Swim
      </h1>
      <ul className='flex justify-evenly w-full'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
