import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Views/ItemListContainer/ItemListContainer';
import ForumLow from './Views/ForumLow/ForumLow';
import Contact from './Views/Contact/Contact';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <div className="app">
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/forums-low" element={<ForumLow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/forum-low/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;