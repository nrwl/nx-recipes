import { isEven } from './is-even';

describe('isEven', () => {
  it('should work', () => {
    expect(isEven(2)).toBeTruthy();
  });
});
