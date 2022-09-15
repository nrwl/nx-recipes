import styles from './admin-ui-header.module.css';

export interface AdminUiHeaderProps {
  userName: string;
}

export function AdminUiHeader(props: AdminUiHeaderProps) {
  return (
    <header className={styles['container']}>
      <h1>This is the admin panel</h1>
      <h2>Welcome {props.userName}</h2>
    </header>
  );
}

export default AdminUiHeader;
