import React from 'react'
import logo from "../assets/logo.png"
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
          <img className='logo' src={logo}/>
        </div>
    </div>
  )
}
