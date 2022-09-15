import { render } from '@testing-library/react';

import ClientUiFooter from './client-ui-footer';

describe('ClientUiFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientUiFooter />);
    expect(baseElement).toBeTruthy();
  });
});
