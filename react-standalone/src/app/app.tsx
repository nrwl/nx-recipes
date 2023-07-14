import { Link, Route, Routes } from 'react-router-dom';
import { Cart } from '@store/cart';
import styles from './app.module.scss';
import { Banner } from '@store/ui';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;

function Shop() {
  return (
    <div className={styles['container']}>
      <Banner text="Shop"></Banner>
      <Link to="/cart">View Cart</Link>
    </div>
  );
}
