import ForumCard from './Item.jsx';

export default function ItemList({ products }) {  // Recibimos los productos como props
    return (
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {products.map(product => <ForumCard key={product.id} product={product} />)}
        </section>
    );
}
