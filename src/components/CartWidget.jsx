import { useContext } from 'react';
import './NavBar.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


export default function CartWidget() {

    const {cantidadEnCarrito} = useContext(CartContext)

    return (
        <>
            <div>
                <button className='btn'><Link to={'/carrito'}>🛒 <span> {cantidadEnCarrito()}</span></Link></button>
            </div>
        </>
    )
}




    