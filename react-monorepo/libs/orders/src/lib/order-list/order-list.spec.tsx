import { render } from '@testing-library/react';

import OrderList from './order-list';

describe('OrderList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderList />);
    expect(baseElement).toBeTruthy();
  });
});
