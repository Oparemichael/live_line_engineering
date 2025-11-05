const ProductCard = ({ product }) => (
  <div>
    <h3>{product?.name || 'No name available'}</h3>
    <p>{product?.price || 'No price available'}</p>
  </div>
);
export default ProductCard;