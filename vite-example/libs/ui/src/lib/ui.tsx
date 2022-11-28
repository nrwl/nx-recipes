import styles from './ui.module.css';
import { Button } from '@vite-example/button';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <h1>Here's an imported lib!</h1>
      <Button />
    </div>
  );
}

export default Ui;
