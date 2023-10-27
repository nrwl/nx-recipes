import { AdminUiHeader } from '@storybook-publishing-strategies-multiple-frameworks/admin-ui-header';
import { AdminUiFooter } from '@storybook-publishing-strategies-multiple-frameworks/admin-ui-footer';

export function App() {
  return (
    <>
      <AdminUiHeader userName="admin" />
      <AdminUiFooter />
    </>
  );
}

export default App;
