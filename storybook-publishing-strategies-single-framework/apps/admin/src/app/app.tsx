import { AdminUiHeader } from '@storybook-publishing-strategies-single-framework/admin-ui-header';
import { AdminUiFooter } from '@storybook-publishing-strategies-single-framework/admin-ui-footer';
import { SharedUiMain } from '@storybook-publishing-strategies-single-framework/shared-ui-main';
import { SharedUiNotification } from '@storybook-publishing-strategies-single-framework/shared-ui-notification';

export function App() {
  return (
    <>
      <AdminUiHeader userName="Admin" />
      <SharedUiMain text="Some text here" />
      <SharedUiNotification alertText="Error!" alertColor="red" />
      <AdminUiFooter />
    </>
  );
}

export default App;
