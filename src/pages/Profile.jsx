import React from 'react'
import { ImExit } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()

  return (
    <>
      <div className='flex justify-end p-2'>
        <button
          className='flex flex-col justify-center items-center'
          onClick={() => {
            localStorage.removeItem('user')
            navigate('/login')
          }}
        >
          <ImExit className='text-2xl text-gray-600' />
          <p className='text-black'>logout</p>
        </button>
      </div>
      <div className='h-full w-full flex flex-col text-[var(--black)] justify-center items-center mt-20 border-2 py-4 bg-gray-400'>
        <h1 className='text-center mb-4 text-xl spacegrotesk'>Progress Tracker</h1>
        <table className='border-separate border-spacing-2 border border-slate-500 bg-gray-300 spacegrotesk w-3/4'>
          <thead>
            <tr>
              <th className='border border-slate-600'>Stroke</th>
              <th className='border border-slate-600'>25m</th>
              <th className='border border-slate-600'>50m</th>
              <th className='border border-slate-600'>100m</th>
              <th className='border border-slate-600'>200m</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-slate-700'>Freestyle</td>
              <td className='border border-slate-700 text-center'>16.9 sec</td>
              <td className='border border-slate-700 text-center'>16.9 sec</td>
              <td className='border border-slate-700 text-center'>16.9 sec</td>
              <td className='border border-slate-700 text-center'>16.9 sec</td>
            </tr>
            <tr>
              <td className='border border-slate-700'>Breaststroke</td>
              <td className='border border-slate-700 text-center'>25 sec</td>
              <td className='border border-slate-700 text-center'>25 sec</td>
              <td className='border border-slate-700 text-center'>25 sec</td>
              <td className='border border-slate-700 text-center'>25 sec</td>
            </tr>
            <tr>
              <td className='border border-slate-700'>Butterfly</td>
              <td className='border border-slate-700 text-center'>30 sec</td>
              <td className='border border-slate-700 text-center'>30 sec</td>
              <td className='border border-slate-700 text-center'>30 sec</td>
              <td className='border border-slate-700 text-center'>30 sec</td>
            </tr>
            <tr>
              <td className='border border-slate-700'>Backstroke</td>
              <td className='border border-slate-700 text-center'>32 sec</td>
              <td className='border border-slate-700 text-center'>32 sec</td>
              <td className='border border-slate-700 text-center'>32 sec</td>
              <td className='border border-slate-700 text-center'>32 sec</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Profile
