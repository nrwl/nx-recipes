import styles from './modules-orders.module.css';

/* eslint-disable-next-line */
export interface ModulesOrdersProps {}

export function ModulesOrders(props: ModulesOrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModulesOrders!</h1>
    </div>
  );
}

export default ModulesOrders;
