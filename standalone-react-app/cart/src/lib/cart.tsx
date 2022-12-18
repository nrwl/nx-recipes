import styles from './cart.module.scss';

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cart!</h1>
    </div>
  );
}

export default Cart;
