import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(
  'pk_test_51MwNrbAYyUscSLFoQyJ6RhSP2OOFelAS3Dt3M7ajXSD2gDPicykJx5EvaSf9nYGQ4e2aBuVpq9wub3GnjkDn2nAx009VyDSyOx'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <App />
      </Provider>
    </Elements>
  </React.StrictMode>
)
