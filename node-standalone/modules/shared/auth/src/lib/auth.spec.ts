import { auth } from './auth';

describe('auth', () => {
  it('should work', () => {
    expect(auth()).toEqual('auth');
  });
});
