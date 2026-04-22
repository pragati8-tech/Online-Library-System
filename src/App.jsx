import { BrowserRouter, Route, Routes} from "react"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        
      </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
