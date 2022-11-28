// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Ui } from '@vite-example/ui';
import sea from '../assets/sea.png';
import reactLogo from '../assets/react.svg';

export function App() {
  return (
    <div className={styles['cont']}>
      <p>Here's a png of the sea:</p>
      <img src={sea} className={styles['sea']} alt="The sea" />
      <p>Here's the React logo svg:</p>
      <img src={reactLogo} className={styles['logo']} alt="React logo" />
      <Ui />
    </div>
  );
}

export default App;
