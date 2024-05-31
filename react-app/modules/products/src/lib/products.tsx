import styles from './products.module.css';

/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
    </div>
  );
}

export default Products;
