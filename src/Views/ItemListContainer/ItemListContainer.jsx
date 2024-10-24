import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const productsRef = collection(db, "products")
        const q = category ? query(productsRef, where("category", "==", category)) : productsRef

        getDocs(q)
            .then((resp) => {

                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }, [category]);

    return (
        <div className="item-list-container">
            <ItemList products={products} /> 
        </div>
    );
}
