import { render } from '@testing-library/react';

import AdminUiHeader from './admin-ui-header';

describe('AdminUiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminUiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
