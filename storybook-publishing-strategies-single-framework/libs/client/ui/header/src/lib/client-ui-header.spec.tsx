import { render } from '@testing-library/react';

import ClientUiHeader from './client-ui-header';

describe('ClientUiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientUiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
