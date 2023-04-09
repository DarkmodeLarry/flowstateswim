import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function MenuList({ menu }) {
  const handleClick = async (id) => {
    const ref = doc(db, 'menu', id)
    await deleteDoc(ref)
  }

  return (
    <div className='menu-list'>
      <ul>
        {menu.map((item) => (
          <li key={item.id} onClick={() => handleClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
