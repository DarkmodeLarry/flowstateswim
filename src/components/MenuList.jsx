import db from '../firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'

function MenuList({ menu }) {
  const handleClick = async (id) => {
    console.log(id)
  }

  return (
    <div className='menu-list'>
      <ul className='flex justify-evenly max-w-full flex-wrap'>
        {menu.map((item) => (
          <li
            className='m-4 bg-cyan-600 p-2 rounded w-[275px] '
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <span className='flex items-center justify-between'>
              <h3 className='capitalize text-md  text-center my-2 font-semibold montserrat text-orange-400'>
                {item.name}
              </h3>
              <span className='flex justify-center items-center'>
                <strong className='text-sm'>${item.fee}</strong>
                <p className='text-xs'>{item.feeType}</p>
              </span>
            </span>
            <hr />
            <div className='flex pt-2 flex-col space-y-2'>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Swimmer levels:</span>
                <span className='font-bold capitalize'>{item.level}</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>When: </span>
                <span className='font-bold capitalize'>{item.schedule}</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Time:</span>
                <span className='font-bold'>{item.time}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuList
