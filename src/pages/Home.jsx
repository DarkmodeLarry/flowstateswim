import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import db from '../firebase.config'
import MenuList from '../components/MenuList'
import MenuForm from '../components/MenuForm'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menu, setMenu] = useState(null)
  const user = JSON.parse(localStorage.getItem('user'))

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
      <div className='py-10 text-gray-200 text-lg montserrat tracking-wide font-semibold'>
        <h1 className='w-full text-center'>Ready to Swim?</h1>
        <p className='text-center'>
          Book one of our available sessions or join our membership program
        </p>
      </div>
      <div className=''>{menu && <MenuList menu={menu} />}</div>
      <div className=''>{/* <MenuForm /> */}</div>
    </div>
  )
}

export default Home
