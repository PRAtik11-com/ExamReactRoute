import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
     

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        // backgroundColor: '#f0f0f0', 
        padding: '10px',
        borderRadius: '5px',
        gap:"15px"
      }}>
      <NavLink to="/Home" style={({ isActive }) => ({
         color: isActive ? "red" : "#007BFF",
       })}>Home</NavLink>
      <NavLink to="/About" style={({ isActive }) => ({
         color: isActive ? "red" : "#007BFF",
       })}>About</NavLink>
      <NavLink to="/Addabout" style={({ isActive }) => ({
         color: isActive ? "red" : "#007BFF",
       })}>AddProduct</NavLink>
      <NavLink to="/Login" style={({ isActive }) => ({
         color: isActive ? "red" : "#007BFF",
       })}>Login</NavLink>
      
    </div>
    </div>
  )
}

export default Navbar
