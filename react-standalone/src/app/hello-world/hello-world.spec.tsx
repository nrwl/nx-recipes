import { render } from '@testing-library/react';

import HelloWorld from './hello-world';

describe('HelloWorld', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelloWorld />);
    expect(baseElement).toBeTruthy();
  });
});
