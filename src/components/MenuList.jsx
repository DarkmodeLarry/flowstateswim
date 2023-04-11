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
            className='m-4 bg-cyan-600 p-2 rounded  '
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <span className='flex items-center justify-between'>
              <h3 className='capitalize text-md px-2 text-center my-2 font-semibold montserrat'>
                {item.name}
              </h3>
              <strong className='text-sm'>${item.fee}</strong>
              <p className='text-xs'>{item.feeType}</p>
            </span>
            <hr />
            <div className='flex pt-2 flex-col space-y-2'>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>swimmer level:</span>
                <span className='font-bold'>{item.level}</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>when: </span>
                <span className='font-bold'>{item.schedule}</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>time:</span>
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
