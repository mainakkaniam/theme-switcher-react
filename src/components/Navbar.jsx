import React from 'react'

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
          <a href="/" style={{textDecoration:"none"}}>Home</a>
          <a href="/help" style={{textDecoration:"none"}}>Help</a>
          <a href="/about"style={{textDecoration:"none"}}>About</a>
      </div>
  )
}

export default Navbar