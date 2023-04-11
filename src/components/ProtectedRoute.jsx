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
      <div className='p-1 w-full'>
        <div className='bg-gray-900 p-2 w-full text-center'>
          <h2
            className='cursor-pointer montserrat font-extrabold italic text-cyan-400 text-2xl'
            onClick={() => navigate('/')}
          >
            Flow State Swim
          </h2>

          {user && (
            <div className='flex gap-3 items-center w-full'>
              <div className='flex gap-1 items-center w-full justify-start'>
                <div className='flex flex-col items-center rounded-full bg-gray-500 p-3'>
                  {/* <img src={user.photoURL} alt='user' className='w-8 h-8 rounded-full' /> */}
                  <FaUserNinja className='w-8 h-8 text-orange-400' />
                  <p>{user.displayName}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('user')
                  navigate('/login')
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='content'>{children}</div>
    </>
  )
}

export default ProtectedRoute
