import { Route, Routes } from 'react-router-dom';
import { ProductList } from '@myreactapp/products';
import { OrderList } from '@myreactapp/orders';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/orders" element={<OrderList />}></Route>
    </Routes>
  );
}

export default App;
