import { render } from '@testing-library/react';

import ModulesProducts from './modules-products';

describe('ModulesProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesProducts />);
    expect(baseElement).toBeTruthy();
  });
});
