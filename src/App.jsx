import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home.jsx"
import BrowseBooks from './pages/BrowseBooks'
import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/books" element={<BrowseBooks />} />
         <Route path="/books/:category" element={<BrowseBooks />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
