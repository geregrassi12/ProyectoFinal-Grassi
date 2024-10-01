import { useEffect, useState } from 'react';
import {getProducts} from '../asyncMock.js'
import ForumCard from './Item.jsx';

export default function ItemList() {
    const [products, setProducts]=useState ([]);

    useEffect(() => {
        getProducts.then(data => setProducts(data))
    }, [])
    return (
    <>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
            {products.map(product => <ForumCard key={product.id} product={product}/>)}
        </section>
    </>
    );
}

