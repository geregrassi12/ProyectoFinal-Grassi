import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({product}){
    return (
    <>
    <article className="product">
        <img className="product-image" src={product.image} alt={product.tittle} />
        <h4>{product.tittle}</h4>
        <p>$ {product.price}</p>
        <button className="product-details"><Link to={`/forum-low/${product.id}`}>Details</Link></button>
    </article>
    </>
    );
}

