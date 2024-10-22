import { useContext } from "react"
import { CartContext } from "../context/CartContext"



const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className="item-list-container">
            <h1>Carrito</h1>

            {
                carrito.length > 0 ? (
                    carrito.map((product) => (
                        <div className="product" key={product.id}>
                            <img className="product-image" src={product.image} alt={product.tittle} />
                            <h2>{product.tittle}</h2>
                            <p>Precio unit.: ${product.price}</p>
                            <p>Precio total: ${product.price * product.cantidad}</p>
                            <p>Cantidad: {product.cantidad}</p>
                        </div>
                    ))
                    
                ) : (
                    <p>Tu carrito está vacío</p>
                )
            }
            {carrito.length > 0 && (
                    <>
                        <h2>Precio total: ${precioTotal()}</h2>
                        <button onClick={handleVaciar}>Vaciar Carrito</button>
                        </>
                )}
        </div>
    )
} 

export default Carrito