import styles from './storybook-host-shared.module.css';

/* eslint-disable-next-line */
export interface StorybookHostSharedProps {}

export function StorybookHostShared(props: StorybookHostSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StorybookHostShared!</h1>
    </div>
  );
}

export default StorybookHostShared;
