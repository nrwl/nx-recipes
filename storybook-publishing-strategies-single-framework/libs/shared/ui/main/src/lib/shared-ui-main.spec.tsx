import { render } from '@testing-library/react';

import SharedUiMain from './shared-ui-main';

describe('SharedUiMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiMain />);
    expect(baseElement).toBeTruthy();
  });
});
