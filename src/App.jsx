import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home.jsx'
import Campeones from './Components/Campeones.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/campeones" element= {<Campeones />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
