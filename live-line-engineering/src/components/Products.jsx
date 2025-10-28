import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'T-Shirt', price: '$20' },
  { id: 2, name: 'Sneakers', price: '$50' },
];

const Products = () => (
  <div>
    <h2>Our Products</h2>
    <div>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  </div>
);

export default Products;
