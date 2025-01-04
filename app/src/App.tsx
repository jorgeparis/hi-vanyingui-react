import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar'
import {Carousel} from './Carousel'
import {Produtos} from './Productos'


function App() {
  return(
    <div className='container'>
    <Navbar/>
    <Carousel/>
    <Produtos/>
    </div>
  )
}
export default App
