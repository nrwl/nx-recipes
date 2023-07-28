import { render } from '@testing-library/react';

import ModulesSharedUi from './modules-shared-ui';

describe('ModulesSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
