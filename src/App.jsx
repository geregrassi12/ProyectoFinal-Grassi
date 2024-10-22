import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import { useState } from 'react';


function App() {
  const [ carrito, setCarrito ] = useState([])
  return (
    <CartContext.Provider value={ { carrito, setCarrito} }>
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
    </CartContext.Provider>
  );
}

export default App;