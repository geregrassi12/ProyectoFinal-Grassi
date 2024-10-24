import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { db } from "../firebase/config"
import { doc, getDoc} from "firebase/firestore"




export default function ItemDetail()  {

    const [product, setProduct]=useState({});

    const { id } = useParams();

    useEffect (() => {
        
        const docRef = doc( db, "products", id)
        getDoc(docRef)
            .then((resp) => {
                setProduct(
                    { ...resp.data(), id: resp.id}
                )
            })

    }, []);

    const { carrito, handleAgregar } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < product.stock && setCantidad (cantidad + 1)
    }
return (
    <>
    <article className="product">
        <img className="product-image" src={product.image} alt={product.tittle} />
        <h2>{product.tittle} - {product.category}</h2>
        <p>Description: {product.description}</p>
        <p>$ {product.price}</p>
        <ItemCount 
            cantidad={cantidad} 
            handleRestar={handleRestar} 
            handleSumar={handleSumar} 
            handleAgregar={() => {handleAgregar(product, cantidad)}}/>
    </article>
    </>
    );
}