import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <div className="app">
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;