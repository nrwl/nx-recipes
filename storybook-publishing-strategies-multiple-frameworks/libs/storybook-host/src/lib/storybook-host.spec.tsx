import { render } from '@testing-library/react';

import StorybookHost from './storybook-host';

describe('StorybookHost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookHost />);
    expect(baseElement).toBeTruthy();
  });
});
