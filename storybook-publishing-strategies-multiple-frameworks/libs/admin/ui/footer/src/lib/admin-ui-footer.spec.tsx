import { render } from '@testing-library/react';

import AdminUiFooter from './admin-ui-footer';

describe('AdminUiFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminUiFooter />);
    expect(baseElement).toBeTruthy();
  });
});
