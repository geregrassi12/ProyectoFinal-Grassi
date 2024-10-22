import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState([]);

    const handleAgregar = (product, cantidad) => {
        const productAgregado = ({ ...product, cantidad });

        const nuevoCarrito = [...carrito]
        const estaEnCarrito = nuevoCarrito.find((product) => product.id === productAgregado.id)


        if (estaEnCarrito) {
            estaEnCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(productAgregado)
        }
        setCarrito(nuevoCarrito)

    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (
        <CartContext.Provider value={{ 
            carrito,
            handleAgregar,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito }}>
                {children}
        </CartContext.Provider>
    )
}