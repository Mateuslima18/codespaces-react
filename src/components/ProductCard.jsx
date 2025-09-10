import './ProductCard.css';

function ProductCard({ name, price, description }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p className="price">Preço: R$ {price.toFixed(2)}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;