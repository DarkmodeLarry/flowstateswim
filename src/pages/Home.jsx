import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import db from '../firebase.config'
import MenuList from '../components/MenuList'
import MenuForm from '../components/MenuForm'

function Home() {
  const [menu, setMenu] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const ref = collection(db, 'menu')

    getDocs(ref).then((snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setMenu(results)
    })
  }, [])

  return (
    <div className='max-w-full flex flex-col'>
      <h1>Menu</h1>
      <div className=''>{menu && <MenuList menu={menu} />}</div>
      <div className=''>
        <MenuForm />
      </div>
    </div>
  )
}

export default Home
