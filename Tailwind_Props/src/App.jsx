import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './assets/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Props</h1>
    <Card1 className='mb-4' username="latest discovery" views='200' btn_text="visit me"></Card1>
    <Card1 className='mt-[50px]'username="discover the nature" views='500' btn_text="learn more"></Card1>
    </>
  )
}

export default App
