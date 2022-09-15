import styles from './storybook-host-admin.module.css';

/* eslint-disable-next-line */
export interface StorybookHostAdminProps {}

export function StorybookHostAdmin(props: StorybookHostAdminProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StorybookHostAdmin!</h1>
    </div>
  );
}

export default StorybookHostAdmin;
