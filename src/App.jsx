import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Menu from './composant/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (   <div className="page">
    <Menu/>
    <div className="container">
      <Outlet/>
    </div>
   </div>  )
}

export default App
