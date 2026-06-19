import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import SideBar from './components/sideBar'

import Home from './pages/home'
import UnidadAdministrativa from './pages/unidadAdministrativa'
import About from './pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />  
      <Navbar />   
      <div className="main">
        <div>
          <SideBar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unidad-administrativa" element={<UnidadAdministrativa />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
