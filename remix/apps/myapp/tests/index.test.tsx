import {render} from '@testing-library/react';
import cmp from '../app/routes';

describe('test', () => {
  it('should render', () => {
    render(cmp as any);
  })
})
