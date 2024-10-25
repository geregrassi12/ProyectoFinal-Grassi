import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import "./Checkout.css"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"

const Checkout = () => {

    const [ pedidoId, setPedidoId ] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        console.log(pedido);
        

        const pedidos = collection(db, "pedidos")


        addDoc(pedidos, pedido)
            .then((doc) => {
                setPedidoId(doc.id)   
            })


    }

    if (pedidoId) {
        return (
            <div className="checkout-container">
                <h2>Muchas gracias por confiar en nosotros!!</h2>
                <p>Tu ID de pedido es: {pedidoId}</p>
            </div>
        )
    }   
    
    return(
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form className="checkout-form" onSubmit={handleSubmit(enviar)}>
                <h3>Nombre Completo</h3>
                <input type="text" placeholder="Nombre Completo" required {...register("nombre")}/>

                <p >Correo Electrónico</p>
                <input type="email" placeholder="correo@example.com" required {...register("correo")}/>

                <p >Ciudad</p>
                <input type="text" placeholder="Ciudad" required {...register("ciudad")}/>

                <button type="submit">Realizar Pedido</button>
            </form>
        </div>
    )
}

export default Checkout