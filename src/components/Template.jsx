
import React from 'react'
import { useTheme } from '../context'

const Template = ({ pagename }) => {
  
  const { isDarkMode, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  }
  return (
    <div className="main" style={{
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
      }}>
        <div className="toggler" style={{
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          gap:"2vh"
        }}>
          <div style={{
            fontSize: "5vw",
            display: "flex",
            gap:"2vw"
              }}>This is <span style={{ color: "#9434ec" }}>{pagename}</span> Page
          </div>
        <button
          onClick={handleToggle}
          style={{
            padding: "10px 20px",
            backgroundColor: "#9434ec",
            color: "white",
            fontSize: "20px",
            border: "none",
            borderRadius: "10px",
            cursor:"pointer"
          }}>Toggler</button>
        </div>
      </div>
  )
}

export default Template