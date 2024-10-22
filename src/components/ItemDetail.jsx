import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../asyncMock";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";




export default function ItemDetailContainer( {item} )  {
    const [product, setProduct]=useState({});

    const { id } = useParams();

    useEffect (() => {
        setProduct(getProduct(id))
    }, []);

    const { carrito, setCarrito } = useContext(CartContext);
    console.log(carrito)    

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < product.stock && setCantidad (cantidad + 1)
    }
    const handleAgregar = () => {
        console.log({...item, cantidad } );
    }
return (
    <>
    <article className="product">
        <img className="product-image" src={product.image} alt={product.tittle} />
        <h2>{product.tittle} - {product.category}</h2>
        <p>Description: {product.description}</p>
        <p>$ {product.price}</p>
        <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar}/>
    </article>
    </>
    );
}