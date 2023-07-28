import styles from './hello-world.module.css';

/* eslint-disable-next-line */
export interface HelloWorldProps {}

export function HelloWorld(props: HelloWorldProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HelloWorld!</h1>
    </div>
  );
}

export default HelloWorld;
