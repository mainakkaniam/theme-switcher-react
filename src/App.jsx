import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Help from './components/Help'
import About from './components/About'
import { ThemeProvider } from './context'

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
