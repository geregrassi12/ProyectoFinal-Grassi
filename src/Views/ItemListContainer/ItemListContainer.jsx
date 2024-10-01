import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getProducts, getCategory } from '../../asyncMock';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            getProducts.then((allProducts) => {
                const filteredProducts = allProducts.filter(product => product.category === category);
                setProducts(filteredProducts);
            });
        } else {
            getProducts.then(setProducts);
        }
    }, [category]);

    return (
        <div className="item-list-container">
            <ItemList products={products} /> 
        </div>
    );
}
