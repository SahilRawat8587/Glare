import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'


function App() {

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
