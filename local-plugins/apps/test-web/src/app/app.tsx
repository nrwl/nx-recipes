import { createTestTrpcClient } from '@acme-webdev/test-trpc-client';
import { useEffect, useState } from 'react';

export function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  useEffect(() => {
    createTestTrpcClient()
      .welcomeMessage.query()
      .then(({ welcomeMessage }) => setWelcomeMessage(welcomeMessage));
  }, []);
  return (
    <>
      <h1>{welcomeMessage}</h1>
    </>
  );
}

export default App;
