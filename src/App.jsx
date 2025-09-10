import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      id: 1,
      name: 'Camiseta React',
      price: 59.9,
      description: 'Camiseta confortável com estampa React.',
    },
    {
      id: 2,
      name: 'Caneca Dev',
      price: 29.9,
      description: 'Caneca personalizada para desenvolvedores.',
    },
    {
      id: 3,
      name: 'Mouse Gamer',
      price: 99.9,
      description: 'Mouse ergonômico com iluminação RGB.',
    },
  ];

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
