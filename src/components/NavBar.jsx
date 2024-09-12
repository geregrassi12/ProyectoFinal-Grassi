import './NavBar.css';

import CartWidget from './CartWidget.jsx';

export default function NavBar() {
    return (
        <header className='navbar'>
        <div className='logo'>
        <h1><span>Plenz</span>Sneakers</h1>
        </div>
        <ul className='menu'>
            <button  className='btn'><a href="#">Nosotros</a></button>
            <button  className='btn'><a href="#">Productos</a></button>
            <button className='btn'><a href="#">Politica</a></button>
        </ul>
        <CartWidget/>
        </header>
    )
}


