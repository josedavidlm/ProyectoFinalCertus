import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Principal } from './Principal.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import './css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AppContext>
  <BrowserRouter>
  <React.StrictMode>
    <Principal />
  </React.StrictMode>
  </BrowserRouter>
  </AppContext>
  
)
