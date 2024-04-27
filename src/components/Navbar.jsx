import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="navbar" style={{
          display: "flex",
          height: "5vh",
          alignItems: "center",
          justifyContent: "center",
          fontSize:"20px",
          gap:"20px"
      }}>
          <Link to="/" style={{textDecoration:"none"}}>Home</Link>
          <Link to="/help" style={{textDecoration:"none"}}>Help</Link>
          <Link to="/about"style={{textDecoration:"none"}}>About</Link>
      </div>
  )
}

export default Navbar