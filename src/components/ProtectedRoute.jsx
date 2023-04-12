import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserNinja } from 'react-icons/fa'

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (!user) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      {user && (
        <div className='flex w-full items-center justify-between bg-[#272a2b] h-20'>
          <div className='navbar p-1 max-w-full flex w-full'>
            <h2
              className='cursor-pointer montserrat font-extrabold italic text-cyan-400 text-3xl'
              onClick={() => navigate('/')}
            >
              Flow State Swim
            </h2>
          </div>
          <div className='flex gap-3 items-center pr-2'>
            <div className='flex items-center gap-2 py-1 px-2 justify-between rounded-full bg-gray-100 w-40 h-10 border-4'>
              <FaUserNinja className='w-8 h-8 text-[var(--black)]' />
              <p className='text-black capitalize font-semibold montserrat pt-2'>
                Hey {user.firstName}!
              </p>
            </div>
          </div>
        </div>
      )}

      <div className='content'>{children}</div>
    </>
  )
}

export default ProtectedRoute
