import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const add = () => {
    if(count < 20)
      setCount(count + 1)
  }
  const subtract = () => {
    if(count > 0)
      setCount(count - 1)
  }
  return (
    <>
      <h1>Simple Counter</h1>
      <h2>Counter Value: {count}</h2>

      <button onClick={add}>Add count</button>
      <button onClick={subtract}>Subtract count</button>
    </>
  )
}

export default App
