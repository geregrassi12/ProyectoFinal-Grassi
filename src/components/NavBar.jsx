import './NavBar.css';
import React from 'react';  
import { Link } from 'react-router-dom';

import CartWidget from './CartWidget.jsx';

export default function NavBar() {
    return (
        <header className='navbar'>
        <div className='logo'>
        <h1><Link to={'/'}><span>Plenz</span>Sneakers</Link></h1>
        </div>
        <ul className='menu'>
            <button  className='btn'><Link to={'/'}>Home</Link></button>
            <button  className='btn'><Link to={'/category/low'}>Forum Low</Link></button>
            <button className='btn'><Link to={'/category/mid'}>Forum Mid</Link></button>
        </ul>
        <CartWidget/>
        </header>
    )
}


