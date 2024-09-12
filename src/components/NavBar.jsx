import './NavBar.css';
import './CartWidget.jsx'

export default function NavBar() {
    return (
        <nav className='navbar'>
        <div className='logo'>
        <h1><span>Plenz</span>Sneakers</h1>
        </div>
        <ul className='menu'>
            <li className='btn btn-links'><a href="#">Nosotros</a></li>
            <li className='btn btn-links'><a href="#">Productos</a></li>
            <li className='btn btn-links'><a href="#">Politica</a></li>
        </ul>
        </nav>
    )
}


