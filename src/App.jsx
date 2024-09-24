import './App.css'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
