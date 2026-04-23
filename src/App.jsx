import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home.jsx"
import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
