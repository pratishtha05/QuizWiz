import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white scroll-smooth">
      <Navbar/>
      <Outlet />
      <Footer />

    </div>
  )
}

export default App
