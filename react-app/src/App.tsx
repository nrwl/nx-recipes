import './App.css';
import HelloWorld from './app/hello-world/hello-world';
import { Route, Routes } from 'react-router-dom';
import { Products } from 'products';
import { Orders } from 'orders';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes>
  );
}

export default App;
