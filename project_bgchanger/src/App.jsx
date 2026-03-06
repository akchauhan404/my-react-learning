import { useState } from 'react'
import './App.css'
import Bar from './components/bar'
function App() {
  const [color, setcolor] = useState("olive")

  return (
  <div className='w-full h-screen duration-200'
  style={{backgroundColor:color}}
  >
    <Bar className='flex-grow'></Bar>
  </div>
  )
}

export default App
