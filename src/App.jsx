import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartView from './Views/CartView/CartView';
import CheckoutView from './Views/CheckoutView/CheckoutView';


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
            <Route path='/checkout' element={<CheckoutView/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;