import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-red-900'>Hello World</h1>
      <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
    </>
  )
}

export default App
