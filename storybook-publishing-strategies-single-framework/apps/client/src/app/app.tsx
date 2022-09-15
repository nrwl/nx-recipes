import { ClientUiHeader } from '@publishing-strategies-single-framework/client/ui/header';
import { ClientUiFooter } from '@publishing-strategies-single-framework/client/ui/footer';
import { SharedUiMain } from '@publishing-strategies-single-framework/shared/ui/main';
import { SharedUiNotification } from '@publishing-strategies-single-framework/shared/ui/notification';

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
