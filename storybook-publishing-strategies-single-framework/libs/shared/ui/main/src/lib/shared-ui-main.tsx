import styles from './shared-ui-main.module.css';
import { SharedUiButton } from '@storybook-publishing-strategies-single-framework/shared-ui-button';
export interface SharedUiMainProps {
  text: string;
}

export function SharedUiMain(props: SharedUiMainProps) {
  return (
    <main className={styles['container']}>
      {props.text}
      <SharedUiButton ctaText="Click Me!" />
    </main>
  );
}

export default SharedUiMain;
