import { useState, useCallback } from 'react';
import { ProductList } from './ProductList';

function App() {
  const [product, SetProduct] = useState('');
  const [productList, SetProductList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    SetProductList([...productList, product]);
    SetProduct('');
  }

  const listModifier = useCallback((list) => {
    const spacedList =list.map((item) => item.split('').join(' '));  
    
    return spacedList;
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={product} onChange={(event) => SetProduct(event.target.value)} />
      </form>
      <ProductList list={productList} listModifier={listModifier} />
    </div>
  );
}

export default App;