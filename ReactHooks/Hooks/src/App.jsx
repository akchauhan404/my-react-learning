import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const Add=()=>{
    if(counter<10)
    setCounter(counter+1)
    else
    setCounter(0)
  }
  const Remove=()=>{
    if(counter>0)
    setCounter(counter-1)
    else
    setCounter(0)
  }
  return (
    <>
      <h1>React Hooks</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={Add}>Add</button>
      <br/>
      <button onClick={Remove}>Remove</button>
    </>
  )
}

export default App
