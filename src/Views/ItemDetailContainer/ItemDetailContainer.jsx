import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

export default function ItemDetail() {
    const [product, setProduct]=useState({});

    const { id } = useParams();

    useEffect (() => {
        setProduct(getProduct(id))
    }, []);

return (
    <>
    <article className="product">
        <img className="product-image" src={product.image} alt={product.tittle} />
        <h2>{product.tittle} - {product.category}</h2>
        <p>Description: {product.description}</p>
        <p>$ {product.price}</p>
    </article>
    </>
    );
}