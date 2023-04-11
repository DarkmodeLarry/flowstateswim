import { useState } from 'react'

import db from '../firebase.config'
import { collection, addDoc } from 'firebase/firestore'

function MenuForm() {
  const [newItem, setNewItem] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addDoc(collection(db, 'menu'), {
      name: newItem
    })

    setNewItem('')
  }

  return (
    <div className='m-5'>
      <form onSubmit={handleSubmit}>
        <label className='montserrat font-semibold border py-2 pl-4'>
          <span>Add new Menu Item: </span>
          <input
            required
            type='text'
            className='p-2 rounded-l text-gray-800'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <button className='rounded border p-2'>Add</button>
      </form>
    </div>
  )
}

export default MenuForm
