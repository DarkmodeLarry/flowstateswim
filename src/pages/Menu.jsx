import React from 'react'
import MenuList from '../components/MenuList'

function Menu() {
  const [menu, setMenu] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  return (
    <div>
      <MenuList />
    </div>
  )
}

export default Menu
