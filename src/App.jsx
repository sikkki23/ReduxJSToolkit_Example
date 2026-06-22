import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector , useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter/counterSlice'

function App() {
  const count  = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <div><button onClick={() => dispatch(increment())}>Increment</button></div>
      <Navbar counter={count} />
      <div><button onClick={() => dispatch(decrement())}>Decrement</button></div>
    </>
  )
}
export default App
