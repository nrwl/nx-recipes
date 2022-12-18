import { render } from '@testing-library/react';

import Cart from './cart';

describe('Cart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cart />);
    expect(baseElement).toBeTruthy();
  });
});
