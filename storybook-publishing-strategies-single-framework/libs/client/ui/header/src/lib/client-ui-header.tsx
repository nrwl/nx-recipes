import styles from './client-ui-header.module.css';

export interface ClientUiHeaderProps {
  title: string;
}

export function ClientUiHeader(props: ClientUiHeaderProps) {
  return (
    <header className={styles['container']}>
      <h1>{props.title}</h1>
    </header>
  );
}

export default ClientUiHeader;
