import { render } from '@testing-library/react';

import ModulesOrders from './modules-orders';

describe('ModulesOrders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesOrders />);
    expect(baseElement).toBeTruthy();
  });
});
