import { ClientUiHeader } from '@storybook-publishing-strategies-single-framework/client-ui-header';
import { ClientUiFooter } from '@storybook-publishing-strategies-single-framework/client-ui-footer';
import { SharedUiMain } from '@storybook-publishing-strategies-single-framework/shared-ui-main';
import { SharedUiNotification } from '@storybook-publishing-strategies-single-framework/shared-ui-notification';

export function App() {
  return (
    <>
      <ClientUiHeader title="Welcome" />
      <SharedUiMain text="Some text here" />
      <SharedUiNotification alertText="Error!" alertColor="red" />
      <ClientUiFooter />
    </>
  );
}

export default App;
