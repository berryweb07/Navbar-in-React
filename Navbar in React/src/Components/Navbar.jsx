import React, { useState } from 'react'
import "./Navbar.css"
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import Home from "./Navbar/Home"
import About from "./Navbar/About"
import Contact from "./Navbar/Contact"
import Services from "./Navbar/Services"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <Router>
      <header className="navbar-header">
        <nav className="navbar">
          <div className="logo">Website</div>
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <NavLink to='/' onClick={closeMenu}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' onClick={closeMenu}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' onClick={closeMenu}>Contact us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/services' onClick={closeMenu}>Services</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default Navbar