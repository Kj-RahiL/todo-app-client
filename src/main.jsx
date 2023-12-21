import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Providers/AuthProviders.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </div>
    </AuthProviders>
  </React.StrictMode>,
)
