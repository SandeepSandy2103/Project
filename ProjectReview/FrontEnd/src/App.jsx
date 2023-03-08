import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Create from './component/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Create/>
    </div>
  )
}

export default App
