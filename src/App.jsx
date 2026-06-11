import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />  
      <Navbar />      
      <Footer />
    </BrowserRouter>
  )
}

export default App
