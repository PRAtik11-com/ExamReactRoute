import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Mainroute from './Allroute/Mainroute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Mainroute />
    </>
  )
}

export default App
