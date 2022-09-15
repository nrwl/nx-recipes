import { render } from '@testing-library/react';

import StorybookHostShared from './storybook-host-shared';

describe('StorybookHostShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookHostShared />);
    expect(baseElement).toBeTruthy();
  });
});
