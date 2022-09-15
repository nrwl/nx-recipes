import styles from './storybook-host-client.module.css';

/* eslint-disable-next-line */
export interface StorybookHostClientProps {}

export function StorybookHostClient(props: StorybookHostClientProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StorybookHostClient!</h1>
    </div>
  );
}

export default StorybookHostClient;
