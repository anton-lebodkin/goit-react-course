import products from "./products.json";

import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
