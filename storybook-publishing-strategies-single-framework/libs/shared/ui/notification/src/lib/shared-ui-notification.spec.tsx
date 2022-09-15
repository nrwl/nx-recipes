import { render } from '@testing-library/react';

import SharedUiNotification from './shared-ui-notification';

describe('SharedUiNotification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiNotification />);
    expect(baseElement).toBeTruthy();
  });
});
