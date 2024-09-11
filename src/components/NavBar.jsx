import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
            <h1><span>Plenz</span>Sneakers</h1>
        </div>
        <ul className='menu'>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Politica</a></li>
        </ul>
        </nav>
    )
}


export default NavBar;