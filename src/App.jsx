import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartView from './Views/CartView/CartView';


function App() {

  

  return (
    <CartProvider>

      <BrowserRouter>
        <NavBar />
        <div className="app">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<CartView/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;