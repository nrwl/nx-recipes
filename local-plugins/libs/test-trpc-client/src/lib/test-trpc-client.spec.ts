import { testTrpcClient } from './test-trpc-client';

describe('testTrpcClient', () => {
  it('should work', () => {
    expect(testTrpcClient()).toEqual('test-trpc-client');
  });
});
