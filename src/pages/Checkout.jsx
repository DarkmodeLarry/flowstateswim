import { useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'

function Checkout() {
  const stripe = useStripe()

  const [product, setProduct] = useState({})

  return (
    <div>
      <h1 className=''>Checkout</h1>
    </div>
  )
}

export default Checkout
