import { render } from '@testing-library/react';

import StorybookHostAdmin from './storybook-host-admin';

describe('StorybookHostAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookHostAdmin />);
    expect(baseElement).toBeTruthy();
  });
});
