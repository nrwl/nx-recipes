import styles from './modules-products.module.css';

/* eslint-disable-next-line */
export interface ModulesProductsProps {}

export function ModulesProducts(props: ModulesProductsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModulesProducts!</h1>
    </div>
  );
}

export default ModulesProducts;
