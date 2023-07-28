import styles from './modules-shared-ui.module.css';

/* eslint-disable-next-line */
export interface ModulesSharedUiProps {}

export function ModulesSharedUi(props: ModulesSharedUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModulesSharedUi!</h1>
    </div>
  );
}

export default ModulesSharedUi;
