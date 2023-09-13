import { Route, Routes } from 'react-router-dom';
import { ProductList } from '@myreactapp/modules/products';
import { OrderList } from '@myreactapp/modules/orders';

function Home() {
  return <h1>Welcome to the App</h1>;
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
