import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import db from '../firebase.config'
import MenuList from '../components/MenuList'
import Pool from '../assets/img/heropage.png'

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
    <div className='relative max-w-full justify-center flex flex-col mb-24'>
      <img src={Pool} alt='' className='z-[-999] absolute top-0 h-96 w-full' />
      <div className='py-10 text-gray-200 text-lg montserrat tracking-wide font-semibold'>
        <h1 className='w-full text-center text-[#f5f5f5]'>Ready to Swim?</h1>
        <p className='text-center text-[#f5f5f5]'>
          Book one of our available sessions or join our membership program
        </p>
      </div>
      <h3 className='text-center w-full text-[#f5f5f5] spacegrotesk text-xl underline'>
        Training Menu
      </h3>
      <div className='flex flex-col justify-center'>{menu && <MenuList menu={menu} />}</div>
    </div>
  )
}

export default Home
