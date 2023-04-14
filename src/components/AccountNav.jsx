import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AccountNav({ children }) {
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
      <div>
        {user && (
          <nav className='bg-[var(--black)] w-full h-16'>
            <ul className='navbar-nav flex justify-evenly items-center h-full montserrat text-lg'>
              <li>
                <Link to='/checkout'>
                  <span aria-label='emoji' role='img'>
                    🛒
                  </span>{' '}
                  Checkout
                </Link>
              </li>
              <li>
                <Link to='/payments'>
                  <span aria-label='emoji' role='img'>
                    💸
                  </span>{' '}
                  Payments
                </Link>
              </li>
              <li>
                <Link to='/customers'>
                  <span aria-label='emoji' role='img'>
                    🧑🏿‍🤝‍🧑🏻
                  </span>{' '}
                  Customers
                </Link>
              </li>
              <li>
                <Link to='/subscriptions'>
                  <span aria-label='emoji' role='img'>
                    🔄
                  </span>{' '}
                  Subscriptions
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div>{children}</div>
    </>
  )
}

export default AccountNav
