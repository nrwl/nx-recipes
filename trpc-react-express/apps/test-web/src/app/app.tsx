import { createTestTrpcClient } from '@trpc-react-express/test-trpc-client';
import { useEffect, useState } from 'react';

export function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  useEffect(() => {
    createTestTrpcClient()
      .welcomeMessage.query()
      .then(({ welcomeMessage }) => setWelcomeMessage(welcomeMessage));
  }, []);
  return <h1 className="text-2xl">{welcomeMessage}</h1>;
}

export default App;
