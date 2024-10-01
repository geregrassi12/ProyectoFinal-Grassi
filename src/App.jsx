import './App.css'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './Views/HomeView/HomeView';
import ForumLow from './Views/ForumLow/ForumLow';
import ForumMid from './Views/ForumMid/ForumMid';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomeView/>} />
        <Route exact path='/forum-low' element={<ForumLow/>} />
        <Route exact path='/forum-mid' element={<ForumMid/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
