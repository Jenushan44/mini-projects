import React from "react";
import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      minHeight: "90vh",
      minWidth: "90vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 className='title'>Theme Toggler</h1>
      <div className="toggle-btn">
        <button
          style={{
            backgroundColor: darkMode ? "white" : "black",
            color: darkMode ? "black" : "white"
          }}
          onClick={() => setDarkMode(false)}
          className="light-btn">
          Light
        </button>
        <button style={{ backgroundColor: darkMode ? "white" : "black", color: darkMode ? "black" : "white" }} onClick={() => setDarkMode(true)} className="dark-btn">Dark</button>
      </div>
    </div>
  )
}

export default App
