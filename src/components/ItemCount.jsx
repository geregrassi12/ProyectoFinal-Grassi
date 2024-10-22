import { useState } from 'react';
import './ItemCount.css'



export default function ItemCount( {cantidad, handleRestar, handleSumar, handleAgregar} ) {

    return(
        <article>
            <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </article>
)
}