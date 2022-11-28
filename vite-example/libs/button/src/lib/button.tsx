import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['btn']}>
      I was imported in the imported lib!
    </button>
  );
}

export default Button;
