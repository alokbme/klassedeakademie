import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div>
             
           <Navbar/>
           <main >
           <Outlet/>
      </main>
       <Footer/>
    </div>
  )
}

export default App