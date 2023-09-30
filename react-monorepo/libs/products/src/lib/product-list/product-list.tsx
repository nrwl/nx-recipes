import styles from './product-list.module.css';

// This import is not allowed 👇
import { OrderList } from '@react-monorepo/orders';

/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductList!</h1>
    </div>
  );
}

export default ProductList;
