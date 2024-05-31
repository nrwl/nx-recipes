import styles from './ui.module.css';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
    </div>
  );
}

export default Ui;
