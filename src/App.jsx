import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'


// pages
import Home from './pages/Home'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
