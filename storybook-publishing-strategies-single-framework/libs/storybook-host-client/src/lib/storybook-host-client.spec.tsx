import { render } from '@testing-library/react';

import StorybookHostClient from './storybook-host-client';

describe('StorybookHostClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookHostClient />);
    expect(baseElement).toBeTruthy();
  });
});
