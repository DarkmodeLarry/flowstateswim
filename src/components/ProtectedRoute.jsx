import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserNinja } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'

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
      <div className='p-1 max-w-full bg-black'>
        <div className=' py-2 px-4 w-full text-center'>
          <h2
            className='cursor-pointer montserrat font-extrabold italic text-cyan-400 text-3xl'
            onClick={() => navigate('/')}
          >
            Flow State Swim
          </h2>

          {user && (
            <div className='flex gap-3 items-center w-full pt-6'>
              <div className='flex gap-1 items-center w-full justify-start'>
                <div className='flex items-center gap-2 py-1 px-3 justify-between rounded-full bg-gray-100 border-orange-500 border-4'>
                  <FaUserNinja className='w-8 h-8 text-black' />
                  <p className='text-black capitalize font-semibold montserrat pt-2'>
                    Hey {user.firstName}!
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('user')
                  navigate('/login')
                }}
              >
                <ImExit className='text-3xl text-gray-600' />
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
