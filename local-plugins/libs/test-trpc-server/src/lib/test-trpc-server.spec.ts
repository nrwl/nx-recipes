import { testTrpcServer } from './test-trpc-server';

describe('testTrpcServer', () => {
  it('should work', () => {
    expect(testTrpcServer()).toEqual('test-trpc-server');
  });
});
